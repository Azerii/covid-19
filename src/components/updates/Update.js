import React from 'react';
import './Update.css';
import view from '../../images/view.png'

const Update = () => {
    return (
        <div className='update-wrapper'>
            <div className='update-header'>
                <div className='last-updated'><span>1 mins</span></div>
                <div className='social'></div>
            </div>
            <h3>New York reports third <br />coronavirus-related death</h3>
            <p>Another person with underlying health conditions has died in New York, Gov. Andrew Cuomo just announced in a press conference.</p> 

            <p>The death of a 79-year-old woman who had “multiple major underlying health issues” brings the state-wide death toll of those who had coronavirus to three, Cuomo said.</p>

            <p>There are 729 confirmed coronavirus cases across the state, Cuomo said, adding, “New York is the state with the most number of cases.”</p>
            <div className='post-image'></div>
            <div className='update-footer'>
                <div className='views'>
                    <div className='view-icon'>
                        <img src={view} alt='Views' />
                    </div>
                    <p>300 Views</p>
                </div>
                <div className='social-icons'>
                    <div><p>Share&nbsp;&nbsp;</p></div>
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