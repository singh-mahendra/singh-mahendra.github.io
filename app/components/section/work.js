'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import * as ResumePropTypes from '../../prop_types/resume';
import BulletPoints from '../bullet_points';
import {Datetime} from '../../utils/datetime';


class Entry extends React.Component{
    render () {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        const index = this.props.index + 1;
        const divider = index === this.props.total ? (<br/>) : (<hr/>);

        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>
                        <a href={this.props.entry.website}>{this.props.entry.company}</a>
                    </h3>
                    <p className='info'>
                        {this.props.entry.position}
                        <span> &bull; </span>
                        <span className='info-summary'>{this.props.entry.summary}</span>
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                    <BulletPoints points={this.props.entry.highlights}/>
                </div>
                {divider}
            </div>
        );
    }
}

Entry.propTypes ={
    index: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    entry: ResumePropTypes.work
};

class Work extends React.Component{
    render () {
        const numEntries = this.props.content.length;
        return (
            <section id='work'>
                <div className='row work'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} index={index} total={numEntries} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

Work.propTypes={
    content: ResumePropTypes.workSet
};

export default Work;
