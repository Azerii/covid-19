import React from 'react';
import './Tabs.css';
import TabItem from './TabItem';

const Tabs = () => {
    return (
        <div className='tabs-wrapper'>
            <TabItem tabName='Updates' active={true}></TabItem>
            <TabItem tabName='Prevention'></TabItem>
            <TabItem tabName='Analysis'></TabItem>
        </div>
    );
};

export default Tabs;