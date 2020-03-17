import React from 'react';
import DashHeader from './DashHeader';
import './Dash.css';

const Dash = () => {
    const screen = window.innerWidth;
    return (
        <div className='Dash'>
            <DashHeader></DashHeader>
            <div id='map' className='map'>
            {(screen > 414) && <iframe
                title="Coronavirus COVID-19 Global Cases by Johns Hopkins CSSE"
                width="100%"
                height="800"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
            >
            </iframe>}
            {(screen <= 414) && <iframe
                title="Coronavirus COVID-19 Global Cases by Johns Hopkins CSSE"
                width="100%"
                height="500"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61"
            >
            </iframe>}            
            </div>
        </div>
    );
};

export default Dash;