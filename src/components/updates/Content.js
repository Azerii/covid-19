import React from 'react';
import './Update.css';
import Update from './Update';
import ads from '../../images/ads.png';
import ads2 from '../../images/ads-2.png';
import ads3 from '../../images/ads3.png';

const Content = () => {
    return (
        <div className='content-wrapper'>
            <div className='ads'>
                <div className='ad-wrapper'>
                    <img src={ads} alt='ad' />
                </div>
                <div className='ad-wrapper'>
                    <img src={ads} alt='ad' />
                </div>
            </div>
            <div className='updates'>
                <Update></Update>
                <div className='post-ad'>
                    <img src={ads2} alt='ad' />
                </div>
                <Update></Update>
                <div className='post-ad'>
                    <img src={ads3} alt='ad' />
                </div>
                <Update></Update>
            </div>
        </div>
    );
};

export default Content;