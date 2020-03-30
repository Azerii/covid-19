import React, { useContext, useEffect } from 'react';
import './Update.css';
import EmailShare from 'react-email-share-link';
import ShareLink from 'react-twitter-share-link';
import Linkify from 'react-linkify';
import ReactPlayer from 'react-player';


const Update = ({title, content, sources, time, media_path, image }) => {
    // media_path = 'none';
    const socialShare = title + '...'+ '\n' + '\n';

    return (
        <div className='update-wrapper'>
            <div className='update-header'>
    <div className='last-updated'><span>{time}</span></div>
                <div className='social'></div>
            </div>
            <h3>{title}</h3>
            <small style={{color: 'gray'}}>
                Sources:&nbsp;&nbsp;
                {sources.map(source => <span>{source}&nbsp;&nbsp;</span>)}
            </small>

            {media_path && media_path.toLowerCase() != 'none' && <div className='insta-embed'>
                <ReactPlayer width='100%' height='200px'  url={media_path} playing />
            </div>}
            {image && image.toLowerCase() != 'none' && <div className='post-image'>
                <img src={image} alt='media' />
            </div>}
            <p><Linkify>{content}</Linkify></p>
             
            <div className='update-footer'>
                <div className='views'>
                    {/* <div className='view-icon'>
                        <img src={view} alt='media' />
                    </div> */}
                    {/* {sources.map(source => <p>{source}</p>)} */}
                </div>
                {/* <hr /> */}
                <div className='social-icons'>
                    <div>
                        <p>Share on social media:&nbsp;&nbsp; </p>
                    </div>
                    <div>
                        <ShareLink link={document.location.href} text={socialShare} hashtags={'covid19'}>
                            {link => (
                                <a href={link} target='_blank'><img src="https://img.icons8.com/color/96/000000/twitter.png"/></a>
                            )}
                        </ShareLink>
                    </div>
                    <div>
                        <a href={`https://api.whatsapp.com/send?text=${socialShare + '\n' + '\n' + document.location.href}`}><img src="https://img.icons8.com/color/50/000000/whatsapp.png"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;