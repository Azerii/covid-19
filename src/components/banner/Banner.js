import React from 'react';
import './Banner.css';
import mobile from '../../images/proto4.png'

const Banner = () => {
    return (
        <div className='banner'>
            <p>Get live updates on Covid&nbsp;&nbsp;-&nbsp;&nbsp;19 to your phone</p>
            <div>
                <img src={mobile} alt='mobile' />
            </div>
        </div>
    );
};

export default Banner;