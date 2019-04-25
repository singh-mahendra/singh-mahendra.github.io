'use strict';

import React from 'react';

import * as ResumePropTypes from '../../prop_types/resume';
import SocialMedia from '../social_media';

class Footer extends React.Component{
    render () {
        return (
            <footer>
                <div className='row'>
                    <div className='twelve columns'>
                        <SocialMedia ulClass='social-links' profiles={this.props.content.profiles}/>
                        <ul className='copyright'>
                            <li>
                                This site is developed in React.js
                            </li>
                        </ul>
                    </div>
                    <div id='go-top'>
                        <a className='smoothscroll' title='Back to Top' href='#home'>
                            <i className='icon-up-open'/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    content: ResumePropTypes.basics
};

export default Footer;
