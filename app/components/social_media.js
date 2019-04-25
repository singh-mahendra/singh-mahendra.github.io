'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import * as ResumePropTypes from '../prop_types/resume';

function mapIcon(socialMedia) {
    const media = socialMedia.replace(/ /g, '-');
    switch (socialMedia) {
        case 'email':
            return (
                <i className={'fa fa-envelope'}/>
            );
        case 'quora':
            return (
                <i className='fa fa-fw'>
                    <strong className='fa-quora'>Q</strong>
                </i>
            );
        default:
            return (
                <i className={`fa fa-${media}`}/>
            );
    }
}

class SocialMedia extends React.Component{
    render () {
        return (
            <ul className={this.props.ulClass}>
                {this.props.profiles.map(function (profile, index) {
                    const icon = mapIcon(profile.network.toLowerCase());
                    return (
                        <li key={index}>
                            <a href={profile.url}>
                                {icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

SocialMedia.propTypes = {
    ulClass: PropTypes.string.isRequired,
    profiles: ResumePropTypes.profiles
};

export default SocialMedia;
