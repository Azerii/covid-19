import React, { useContext, useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

import TokenContext from '../../context/token/tokenContext';
// import TokenReducer from '../../context/token/tokenReducer';

import './PostForm.css';
import { Input } from '@material-ui/core';

// const axios = require('axios');

export default function PostForm() {

  // const [state, dispatch] = useReducer(TokenReducer, {});

  const tokenContext = useContext(TokenContext);

  const { savePost, token, setLoggedOut } = tokenContext;


  return (
    
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        POST
      </Typography>
      <Grid container spacing={1}>
        {/* <form name="postForm" noValidate> */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12} sm={12}>
              <TextareaAutosize label="Title" id='post-field' aria-label="content post" rowsMin={20} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="media"
              name="media"
              label="Link to Media"
              fullWidth
              
            />
          </Grid>
          {/* <Grid item xs={12}>
            <Input
              required
              type='file'
              id="image"
              name="image"
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              required
              id="tags"
              name="tags"
              label="Tags seperated by comma"
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="sources"
              name="sources"
              label="Sources seperated by comma"
              fullWidth
              
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="password" name="password" label="Password" fullWidth />
          </Grid> */}
          {/* <Grid item xs={12} sm={6}>
            
          </Grid> */}
          
          <Grid item xs={12} sm={12}>
            <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="link"
                onClick={() => savePost(
                  {
                    title: document.getElementById('title').value,
                    content: document.getElementById('post-field').value,
                    media: document.getElementById('media').value,
                    tags: document.getElementById('tags').value.split(','),
                    sources: document.getElementById('sources').value.split(','),
                    token: token
                  })
                }
                // href='http://covid-19-api.digifigs.com/api/v1.0/Login'
              >
                Save
              </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              variant="contained"
              color="link"
              onClick={setLoggedOut}
            >
              logout
            </Button>
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid> */}
        {/* </form> */}
        
      </Grid>
    </React.Fragment>
  );
}