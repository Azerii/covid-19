import React from 'react';
import './Dash.css';

const DashHeader = () => {
    return (
        <div className='dash-header'>
            <div className='dash-header-text'>
                <h5>World Corona Live update Map</h5>
                <p>Click on map to see live updates on countries <br /> and states covered by the virus</p>
            </div>
        </div>
    );
};

export default DashHeader;