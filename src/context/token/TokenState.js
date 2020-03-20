import React, { useReducer } from 'react';
import axios from 'axios';
import TokenContext from './tokenContext';
import TokenReducer from './tokenReducer';
import {
    FETCH_TOKEN,
    SAVE_POST,
    UPLOAD_IMAGE,
    GET_POSTS,
    SET_LOADING,
    SET_AUTH_ROUTE
} from '../../types';

const TokenState = props => {
    
    const initialState = {
      host: 'http://covid-19-api.digifigs.com/',
      hostName: window.location.hostname,
      token: '',
      posts: [],
      post: {},
      authRoute: '',
      loading: false
    }

    const [state, dispatch] = useReducer(TokenReducer, initialState);

    // Get User
    // const getUser = async login => {
    //     setLoading();
    //     const res = await axios.get(
    //       `http://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    //     );
    
    //     dispatch({
    //         type: GET_USER,
    //         payload: res.data
    //     });
    //   };
      
    
      const getToken  = async () => {
        setLoading();
        const res = await axios.post('http://covid-19-api.digifigs.com/api/v1.0/Login', 
        {'email': 'davidBowo@helloworld.com', 'password': 'shakushaku'}, {
          headers: { 'Content-Type': 'application/json', },
        });
        dispatch({
          type: FETCH_TOKEN,
          payload: res.data.success.token
        });
        setauthRoute();
        
      }

      const setauthRoute = () => dispatch({ type: SET_AUTH_ROUTE });

      

      // const uploadImage  = async () => {
      //   const res = await axios.post('http://covid-19-api.digifigs.com/api/v1.0/Login', 
      //   {'email': 'davidbowo@helloworld.com', 'password': 'shakushaku'}, {
      //     headers: { 'Content-Type': 'application/json', },
      //   });
      //   const token = res.data.success.token;

        
    
      //   res = await axios.post('http://covid-19-api.digifigs.com/api/v1.0/UploadImage', 
      //   form, {
      //     headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`},
      //   });
      //   dispatch({
      //     type: UPLOAD_IMAGE,
      //     payload: res.data
      //   });
      // }
      // const form = {
      //   "title": "Test",
      //   "content": "shakushakuxxx",
      //   "image_path": "1584471623.png",
      //   "tags": [
      //     "h",
      //     "u"
      //   ],
      //   "sources": [
      //     "f"
      //   ]
      // }

      const savePost = async (image, formFields) => {
        setLoading();
        const form = new FormData();
        
        try{
          form.append('image', image.files[0], formFields.image);
        } catch(err) {
          console.log(err)
        }
        

        let res = await axios.post('http://covid-19-api.digifigs.com/api/v1.0/Login', 
        {'email': 'davidbowo@helloworld.com', 'password': 'shakushaku'}, {
          headers: { 'Content-Type': 'application/json', },
        });
        const token = res.data.success.token;

        res = await axios.post('http://covid-19-api.digifigs.com/api/v1.0/UploadImage', 
        form, {
          headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`},
        });
        dispatch({
          type: UPLOAD_IMAGE,
          payload: res.data
        });
        const img_path = res.data.success.image_uri

        res = await axios.post('http://covid-19-api.digifigs.com/api/v1.0/CreatePost', 
        {
        "title": formFields.title,
        "content": formFields.content,
        "image_path": img_path,
        "tags": formFields.tags,
        "sources": formFields.sources
        }, {
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        });
        dispatch({
          type: SAVE_POST,
          payload: res.data
        });
        getPosts();
      }

      const getPosts = async () => {
        setLoading();
        let res = await axios.post('http://covid-19-api.digifigs.com/api/v1.0/Login', 
        {'email': 'davidbowo@helloworld.com', 'password': 'shakushaku'}, {
          headers: { 'Content-Type': 'application/json', },
        });
        const token = res.data.success.token;
        res = await axios.get('http://covid-19-api.digifigs.com/api/v1.0/GetPosts',  
              {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
              }
        );
        dispatch({
          type: GET_POSTS,
          payload: res.data
        });
      }
    const setLoading = () => dispatch({ type: SET_LOADING });
    return <TokenContext.Provider value={{
        token: state.token,
        posts: state.posts,
        post: state.post,
        host: state.host,
        hostName: state.hostName,
        loading: state.loading,
        authRoute: state.authRoute,
        getToken,
        savePost,
        getPosts,
        setauthRoute,
        setLoading
        // uploadImage
    }}>
        {props.children}
    </TokenContext.Provider>
}

export default TokenState;