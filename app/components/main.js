'use strict';
import PropTypes from 'prop-types';
import React from 'react';

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Main extends React.Component{
    render() {
        return (
            <div className='main-container'>
                <ReactCSSTransitionGroup transitionName='appear' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Main.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default Main;
