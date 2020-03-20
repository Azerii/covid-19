import React, { useContext, useEffect } from 'react';
import './Update.css';
import Update from './Update';
import ads4 from '../../images/ads4.png';
import ads5 from '../../images/ads5.png';
import ads6 from '../../images/ads6.png';
import ads7 from '../../images/ads7.png';

import Spinner from '../Spinner';

import TokenContext from '../../context/token/tokenContext';

const Content = () => {

    const tokenContext = useContext(TokenContext);

    const { posts, getPosts, loading } = tokenContext;

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
      }, [])
    if(loading) return <Spinner />
    const postable = posts.reverse();

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
                {postable.map(post => (<React.Fragment>
                    <Update title={post.title} content={post.content} media={post.featured_image} time={post.created_at} sources={post.sources}></Update>
                    <div className='post-ad'>
                        <img src={ads6} alt='ad' />
                    </div>
                    </React.Fragment>
                ))}
                {/* <Update title={posts[0].title} content={posts[0].content}></Update>
                <div className='post-ad'>
                    <img src={ads6} alt='ad' />
                </div>
                <Update title={posts[0].title} content={posts[0].content}></Update>
                <div className='post-ad'>
                    <img src={ads7} alt='ad' />
                </div>
                <Update title={posts[0].title} content={posts[0].content}></Update> */}
            </div>
        </div>
    );
};

export default Content;