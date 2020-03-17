import React from 'react';
import './Tabs.css';

const TabItem = ({tabName, active}) => {
    return (
        <div className='tab-item'>
            <p>{tabName}</p>
            {active && <div className='active'></div>}
        </div>
    );
};

export default TabItem;