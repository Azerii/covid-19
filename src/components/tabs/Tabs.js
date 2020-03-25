import React, { useState, useContext } from 'react';
import './Tabs.css';
import TabItem from './TabItem';

import TokenContext from '../../context/token/tokenContext';

const Tabs = () => {
    const tokenContext = useContext(TokenContext);

    const { setActiveUState, setActivePState, setActiveAState, activeU, activeP, activeA } = tokenContext;
    

    return (
        <div className='tabs-wrapper'>
            <button onClick={setActiveUState}><TabItem tabName='Updates' active={activeU}></TabItem></button>
            <button onClick={setActivePState}><TabItem tabName='Prevention' active={activeP}></TabItem></button>
            <button onClick={setActiveAState}><TabItem tabName='Analysis' active={activeA}></TabItem></button>
        </div>
    );
};

export default Tabs;