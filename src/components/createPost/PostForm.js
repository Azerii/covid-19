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

  const clearForm = () => {
    
    document.getElementById('title').value = '';
    document.getElementById('post-field').value = '';
    document.getElementById('media').value = '';
    document.getElementById('tags').value = '';
    document.getElementById('sources').value = '';
    document.getElementById('country').value = '';
    document.getElementById('state').value = '';
    
  }

  return (
    
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        POST
      </Typography>
      <Grid container spacing={1}>
        {/* <form className='post-form' name="postForm" noValidate> */}
          <Grid item xs={12} sm={6}>
            <Button
              className='clear-form'
              fullWidth={true}
              variant="contained"
              color="link"
              onClick={() => clearForm()}
            >
              Clear Form
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className='post-field'
              required
              id="title"
              name="title"
              label="Title"
              fullWidth={true}
              
            />
          </Grid>
          <Grid item xs={12} sm={12}>
              <TextareaAutosize className='post-field' label="Title" id='post-field' aria-label="content post" rowsMin={20} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='post-field'
              required
              id="media"
              name="media"
              label="Link to Media"
              fullWidth={true}
              
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              required
              type='file'
              id="image"
              name="image"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='post-field'
              required
              id="tags"
              name="tags"
              label="Tags seperated by comma"
              fullWidth={true}
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='post-field'
              id="sources"
              name="sources"
              label="Sources seperated by comma"
              fullWidth={true}
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='post-field'
              id="country"
              name="country"
              label="Country"
              fullWidth={true}
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='post-field'
              id="state"
              name="state"
              label="State"
              fullWidth={true}
              
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
                fullWidth={true}
                variant="contained"
                color="link"
                onClick={() => savePost(
                  {
                    title: document.getElementById('title').value,
                    content: document.getElementById('post-field').value,
                    image: document.getElementById('image'),
                    media: document.getElementById('media').value || 'none',
                    tags: document.getElementById('tags').value.split(','),
                    sources: document.getElementById('sources').value.split(','),
                    country: document.getElementById('country').value,
                    state: document.getElementById('state').value,
                    token: token
                  })
                }
                
              >
                Save
              </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth={true}
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