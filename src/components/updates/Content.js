import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Update.css';
import Update from './Update';
import LazyLoad from 'react-lazyload';

import ads4 from '../../images/ads4.png';
import ads5 from '../../images/ads5.png';
// import ads6 from '../../images/ads6.png';
import ads7 from '../../images/ads7.png';

import Spinner from '../Spinner';

import TokenContext from '../../context/token/tokenContext';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const Content = () => {

    const classes = useStyles();
    const [region, setRegion] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        setRegion(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

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
                {/* <div className='filter'>
                    <div>
                        <p>Filter by Region: </p>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Region</InputLabel>
                            <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={region}
                            onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'oyo'}>Oyo</MenuItem>
                            <MenuItem value={'FCT'}>FCT</MenuItem>
                            <MenuItem value={'Lagos'}>Lagos</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div> */}
                {postable.map(post => activeTab.active && post.tags[0].toLowerCase() === activeTab.tag && (
                    <LazyLoad key={post.id} placeholder={<Spinner />} >
                        <Update 
                            title={post.title} 
                            content={post.content.split('\n').map((item, key) => {
                                return <span key={key}>{item}<br/></span>})} 
                            time={post.created_at} 
                            sources={post.sources} 
                            media={post.attachments === null ? 'none' : post.attachments[0].map((item, key) => {
                                return item.path
                            })}
                            image={post.attachments === null ? 'none' : post.attachments[1].map((item, key) => {
                                return item.path
                            })}
                        ></Update>
                    </LazyLoad>
                ))}     
                
            </div>
        </div>
    );
};

export default Content;