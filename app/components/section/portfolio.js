'use strict';

import React from 'react';

import * as ResumePropTypes from '../../prop_types/resume';
import {Random} from '../../utils/random';
import Modal from './modal';

class Entry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false
        };
    }

    handleOpenModal () {
        return this.setState({
            modalOpen: true
        });
    }

    handleCloseModal () {
        return this.setState({
            modalOpen: false
        });
    }

    render () {
        return (
            <div className='columns portfolio-item'>
                <div className='item-wrap' onClick={this.handleOpenModal.bind(this)}>
                    <img
                        src={this.props.entry.image.thumb}
                        alt={this.props.entry.name}/>
                    <div className='overlay'>
                        <div className='portfolio-item-meta'>
                            <h5>{this.props.entry.name}</h5>
                            <p>{this.props.entry.category}</p>
                        </div>
                    </div>
                    <div className='link-icon'>
                        <i className='icon-down-open'/>
                    </div>
                </div>
                <Modal entry={this.props.entry} isOpen={this.state.modalOpen} onRequestClose={this.handleCloseModal.bind(this)}/>
            </div>
        );
    }
}

Entry.propTypes= {
    entry: ResumePropTypes.projects
};
class Portfolio extends React.Component{
    render () {
        const portfolio = Random.shuffleArray(this.props.content).slice(0, 8);
        return (
            <section id='portfolio'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1>Portfolio</h1>
                        <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                            {portfolio.map(function (entry, index) {
                                return (
                                    <Entry key={index} index={index} entry={entry}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Portfolio.propTypes= {
    content: ResumePropTypes.projectsSet
};

export default Portfolio;
