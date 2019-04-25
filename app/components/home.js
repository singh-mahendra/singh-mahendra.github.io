'use strict';

import Banner from './banner';
import Header from './header';
import Loading from './loading';
import Navigation from './navigation';
import PropTypes from 'prop-types';
import React from 'react';
import request from 'superagent';
import Section from './section';
import ScrollDown from './scrolldown';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resume: false
        };
    }

    componentDidMount() {
        return request
            .get(this.props.route.config.resumePath)
            .end(function (error, response) {
                return error ? error : this.setState({
                    resume: response.body
                });
            }.bind(this));
    }

    onLoad() {
        return (<div>
            <Header>
                    <Navigation navigation={this.props.route.config.navigation}/>
                    <Banner basics={this.state.resume.basics}/>
                    <ScrollDown/>
                </Header>
                <Section
                    basics={this.state.resume.basics}
                    work={this.state.resume.work}
                    education={this.state.resume.education}
                    skills={this.state.resume.skills}
                    languages={this.state.resume.languages}
                    portfolio={this.state.resume.projects}/>
            </div>
        );
    }

    beforeLoad() {
        return (
            <Loading/>
        );
    }

    render() {
        return this.state.resume ? this.onLoad() : this.beforeLoad();
    }
}

Home.propTypes = {
    route: PropTypes.shape({
        config: PropTypes.shape({
            resumePath: PropTypes.string.isRequired,
            navigation: PropTypes.object.isRequired
        }).isRequired
    }).isRequired
};

export default Home;
