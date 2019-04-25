'use strict';

import React from 'react';

import * as ResumePropTypes from '../prop_types/resume';

class BulletPoints extends React.Component{
    render() {
        return (
            <div>
                {this.props.points.map(function (point, index) {
                    return (
                        <p key={index} className='point'>
                            <span className='bullet-point'>&bull; </span>
                            {point}
                        </p>
                    );
                })}
            </div>
        );
    }
}
BulletPoints.propTypes= {
    points: ResumePropTypes.bulletPoints
};

export default BulletPoints;
