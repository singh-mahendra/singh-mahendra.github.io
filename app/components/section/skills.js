'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import * as ResumePropTypes from '../../prop_types/resume';

class Entry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style: {
                background: '#313131'
            }
        };
    }

    handleMouseEnter () {
        return this.setState({
            style: {
                background: '#11ABB0'
            }
        });
    }

    handleMouseLeave () {
        return this.setState({
            style: {
                background: '#313131'
            }
        });
    }

    render () {
        return (
            <li>
                <span
                    className={`bar-expand percentage${this.props.entry.level}`}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    style={this.state.style}/>
                <em>{this.props.entry.name}</em>
            </li>
        );
    }
}

Entry.propTypes= {
    entry: ResumePropTypes.languages
};

class Skill extends React.Component{
    render () {
        const summary = this.props.summary.map(function (point, index) {
            return (
                <p key={index} className='skill-summary'>{point}</p>
            );
        });
        return (
            <div className='row inside'>
                <h3>{this.props.title}</h3>
                {summary}
                <div className='bars'>
                    <ul className='skills'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry}/>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
Skill.propTypes= {
    content: PropTypes.shape({
        skills: ResumePropTypes.skillsSet,
        languages: ResumePropTypes.languagesSet
    }).isRequired
};

class Skills extends React.Component{
    render () {
        return (
            <section id='skill'>
                <div className='row skill'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.skills.map(function (skill, index) {
                            return (
                                <Skill
                                    key={index}
                                    title={skill.title}
                                    content={skill.skillDetails}
                                    summary={skill.description}/>
                            );
                        })}
                        {/*
                            <Skill title='Languages' content={this.props.content.languages}/>
                        */}
                    </div>
                </div>
            </section>
        );
    }
}

Skills.propTypes= {
    title: PropTypes.string.isRequired,
    content: ResumePropTypes.languagesSet,
    summary: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Skills;
