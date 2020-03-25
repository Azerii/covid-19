import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import instagram from '../../images/Instagramcovid-19.png';
import facebook from '../../images/facebookcovid-19.png';
import twitter from '../../images/twittercovid-19.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo-social'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='social'>
                    <div className='icon'>
                        <a href='mailto:covid19@digifigs.com'><img src="https://img.icons8.com/windows/64/000000/new-post.png"/></a>
                    </div>
                    <div className='icon'>
                        <a href='http://twitter.com/covid19_latest'><img src="https://img.icons8.com/windows/32/000000/twitter.png"/></a>
                    </div>
                </div>
            </div>
            <div className='address'>
                <h6>Ibadan</h6>
                <p>Kuye Street, Ikolaba Estate,</p> <p>Adjacent A3 Estate, Ikolaba, Ibadan</p>
            </div>
            <div className='mission'>
                {/* <h6>Our Mission</h6>
                <p>Opportunity to work with achieve over and beyond their set targets. </p> 
                <p>Our clients’ growth and satisfaction is our growth and fulfilment.</p> */}
            </div>
        </div>
    );
};

export default Footer;