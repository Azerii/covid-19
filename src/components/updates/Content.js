import React, { useContext, useEffect } from 'react';
import './Update.css';
import Update from './Update';
import LazyLoad from 'react-lazyload';

import ads4 from '../../images/ads4.png';
import ads5 from '../../images/ads5.png';
// import ads6 from '../../images/ads6.png';
import ads7 from '../../images/ads7.png';

import Spinner from '../Spinner';

import TokenContext from '../../context/token/tokenContext';

const Content = () => {

    const tokenContext = useContext(TokenContext);

    const { posts, getPosts, loading, activeU, activeP, activeA } = tokenContext;

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
      }, [])
    if(loading) return <Spinner />;

    let postable = [];

    posts.map(item => postable.push(item))

    postable.reverse();
    

    let activeTab = {};

    if(activeU) {
        activeTab.active = activeU;
        activeTab.tag = 'u';
    } else if(activeP) {
        activeTab.active = activeP;
        activeTab.tag = 'p';
    } else if(activeA) {
        activeTab.active = activeA;
        activeTab.tag = 'a';
    }
    

    return (
        <div className='content-wrapper'>
            <div className='ads'>
                <div className='ad-wrapper'>
                    <img src={ads4} alt='ad' />
                </div>
                <div className='ad-wrapper'>
                    <img src={ads5} alt='ad' />
                </div>
            </div>
            <div className='updates'>
                <div className='post-ad'>
                        <img src={ads7} alt='ad' />
                </div>
                
                {postable.map(post => activeTab.active && post.tags[0].toLowerCase() === activeTab.tag && (
                    <LazyLoad key={post.id} placeholder={<Spinner />} >
                        <Update 
                            title={post.title} 
                            content={post.content.split('\n').map((item, key) => {
                                return <span key={key}>{item}<br/></span>})} 
                            time={post.created_at} 
                            sources={post.sources} 
                            media_path={post.media_path}
                        ></Update>
                    </LazyLoad>
                ))}     
                
            </div>
        </div>
    );
};

export default Content;