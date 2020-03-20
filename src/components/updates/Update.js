import React, { useContext, useEffect } from 'react';
import './Update.css';
// import view from '../../images/view.png';

import TokenContext from '../../context/token/tokenContext';

const Update = ({title, content, media, time, sources}) => {

    const tokenContext = useContext(TokenContext);

    const { host, hostName } = tokenContext;

    // useEffect(() => {
    //     let d = new Date().getMinutes();
    //     return d;
    //     // eslint-disable-next-line
    //   }, [])

    
    return (
        <div className='update-wrapper'>
            <div className='update-header'>
    <div className='last-updated'><span>{time}</span></div>
                <div className='social'></div>
            </div>
            <h3>{title}</h3>
            <p> {content} </p> 
            <div className='post-image'>
                <img src={`${host}/uploads/${media}`} alt='Views' />
            </div>
            <div className='update-footer'>
                <div className='views'>
                    {/* <div className='view-icon'>
                        <img src={view} alt='media' />
                    </div> */}
                    {/* {sources.map(source => <p>{source}</p>)} */}
                </div>
                <hr />
                <div className='social-icons'>
                <div><p>Share&nbsp;&nbsp; </p></div>
                    <div>
                        {/* <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt='instagram' /> */}
                        <a href='mailto:covid19@digifigs.com'><img src="https://img.icons8.com/color/48/000000/gmail.png" alt='email' /></a>
                        <a href='http://twitter.com/covid19_latest'><img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt='twitter' /></a>
                        {/* <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt='linkdn' /> */}
                        {/* <img src="https://img.icons8.com/color/48/000000/facebook.png" alt='facebook' /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;