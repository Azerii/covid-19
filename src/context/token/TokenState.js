import React, { useReducer } from 'react';
import axios from 'axios';
import TokenContext from './tokenContext';
import TokenReducer from './tokenReducer';
import {
    FETCH_TOKEN,
    SAVE_POST,
    UPLOAD_IMAGE,
    GET_POSTS,
    UPDATE_POST,
    SET_ACTIVE_U_STATE, SET_ACTIVE_P_STATE, SET_ACTIVE_A_STATE,
    SET_LOADING,
    SET_LOGGED_IN,
    SET_LOGGED_OUT
} from '../../types';

const TokenState = props => {
    
    const initialState = {
      host: 'https://covid-19-api.digifigs.com/',
      hostName: window.location.hostname,
      token: '',
      posts: [],
      post: {},
      activeU: true, 
      activeP: false, 
      activeA: false,
      loggedIn: false,
      loading: false
    }

    const [state, dispatch] = useReducer(TokenReducer, initialState);
      
    
      const getToken  = async (form) => {
        // setLoading();
        try { const res = await axios.post('https://covid-19-api.digifigs.com/api/v1.0/Login', 
        {'email': form.email, 'password': form.password }, {
          headers: { 'Content-Type': 'application/json', },
        }); 
        dispatch({
          type: FETCH_TOKEN,
          payload: res.data.success.token
        });
        setLoggedIn();
        } catch (error) {
          console.log(error);
          alert('invalid request!');

        }
        getPosts();
        
      }

      const setLoggedIn = () => dispatch({ type: SET_LOGGED_IN });
      const setLoggedOut = () => dispatch({ type: SET_LOGGED_OUT });

      const savePost = async (formFields) => {
        setLoading();
        // const form = new FormData();
        
        // try{
        //   form.append('image', image.files[0], formFields.image);
        // } catch(err) {
        //   console.log(err)
        // }

        // let res = await axios.post('https://covid-19-api.digifigs.com/api/v1.0/UploadImage', 
        // form, {
        //   headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${formFields.token}`},
        // });
        // dispatch({
        //   type: UPLOAD_IMAGE,
        //   payload: res.data
        // });
        // const img_path = res.data.success.image_uri
        // if(formFields.media) let medaiPath = formFields.media
        try { let res = await axios.post('https://covid-19-api.digifigs.com/api/v1.0/CreatePost', 
        {
        "title": formFields.title,
        "content": formFields.content,
        "media_path": formFields.media,
        "tags": formFields.tags,
        "sources": formFields.sources
        }, {
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${formFields.token}` },
        });
        dispatch({
          type: SAVE_POST,
          payload: res.data
        });
        alert('Post saved successfully');
        } catch (error) {
          // console.log(error);
          alert('invalid submission!');
        }
        getPosts();
      }

      const getPosts = async () => {
        setLoading();
        let res = await axios.post('https://covid-19-api.digifigs.com/api/v1.0/Login', 
        {'email': 'davidbowo@helloworld.com', 'password': 'shakushaku'}, {
          headers: { 'Content-Type': 'application/json', },
        });
        const token = res.data.success.token;
        res = await axios.get('https://covid-19-api.digifigs.com/api/v1.0/GetPosts',  
              {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
              }
        );
        dispatch({
          type: GET_POSTS,
          payload: res.data
        });
      }

      const updatePost = async (update) => {
        
        try { let res = await axios.post('https://covid-19-api.digifigs.com/api/v1.0/UpdatePost', 
        {
        "id": update.id,
        "title": update.title,
        "content": update.content,
        // "media_path": update.media,
        "sources.0": update.sources
        }, {
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${update.token}` },
        });
        
        dispatch({
          type: UPDATE_POST,
          payload: res.data
        });
        alert('Post updated successfully');
        } catch (error) {
          console.log(update);
          alert('invalid submission!');
        }
        getPosts();
      }

    const setActiveUState = () => dispatch({ type: SET_ACTIVE_U_STATE });
    const setActivePState = () => dispatch({ type: SET_ACTIVE_P_STATE });
    const setActiveAState = () => dispatch({ type: SET_ACTIVE_A_STATE });

    const setLoading = () => dispatch({ type: SET_LOADING });

    return <TokenContext.Provider value={{
        token: state.token,
        posts: state.posts,
        post: state.post,
        activeU: state.activeU,
        activeP: state.activeP,
        activeA: state.activeA,
        host: state.host,
        hostName: state.hostName,
        loading: state.loading,
        loggedIn: state.loggedIn,
        getToken,
        savePost,
        getPosts,
        updatePost,
        setActiveUState, setActivePState, setActiveAState,
        setLoggedIn,
        setLoggedOut,
        setLoading
        // uploadImage
    }}>
        {props.children}
    </TokenContext.Provider>
}

export default TokenState;