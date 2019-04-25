'use strict';

import React from 'react';

import * as ResumePropTypes from '../../prop_types/resume';
import About from './about';
import Work from'./work';
import Education from'./education';
import Skills from'./skills';
import Portfolio from'./portfolio';
import Footer from'./footer';

class Section extends React.Component{
    render () {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skillsContent}/>
                <Portfolio content={this.props.portfolio}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
}
Section.propTypes = {
    basics: ResumePropTypes.basics,
    work: ResumePropTypes.workSet,
    education: ResumePropTypes.educationSet,
    skills: ResumePropTypes.skillsSet,
    languages: ResumePropTypes.languagesSet,
    portfolio: ResumePropTypes.publicationsSet
};

export default Section;
