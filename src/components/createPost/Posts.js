import React, { useState, useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import Title from './Title';

import TokenContext from '../../context/token/tokenContext';
import './PostForm.css'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Posts() {

  const [editing, enableEditing] = useState(false);
  const [post, setPost] = useState({});
  
  const classes = useStyles();

  const tokenContext = useContext(TokenContext);

  const { posts, updatePost, token, deletePost } = tokenContext;

  let postable = [];

  posts.map(item => postable.push(item))

  postable.reverse();

  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post!")) {
      deletePost({id: id, token: token});
    }
  }


  return (
    <React.Fragment>
    { editing === false && <React.Fragment>
      <Title>All Posts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Sources</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postable.map(post => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.created_at}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.tags}</TableCell>
              <TableCell>{post.sources}</TableCell>
              <TableCell>
              <Button
              fullWidth={true}
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {enableEditing(true); setPost(post)}}
              >
                Edit
              </Button>
              </TableCell>
            <TableCell>
              <Button
              fullWidth={true}
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {setPost(post); confirmDelete(post.id)}}
            >
              Delete
            </Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>}
    { editing === true && <React.Fragment>
      <Typography variant="h6" gutterBottom>
        EDIT POST
      </Typography>
      <Grid container spacing={1}>
        {/* <form name="postForm" noValidate> */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="title-update"
              name="title"
              label="Title"
              fullWidth={true}
              defaultValue={post.title}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
              <TextareaAutosize fullWidth label="Title" id='post-field-update' aria-label="content post" rowsMin={20} defaultValue={post.content} />
          </Grid>
          {/* <Grid item xs={12}>
            <Input
              required
              type='file'
              id="image-update"
              name="image"
              defaultValue={post.media_path || 'none'}
            />
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              required
              id="media-update"
              name="media"
              label="Link to Media"
              fullWidth={true}
              defaultValue={post.media || 'none'}
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
              id="tags-update"
              name="tags"
              label="Tags seperated by comma"
              fullWidth={true}
              defaultValue={post.tags}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="sources-update"
              name="sources"
              label="Sources seperated by comma"
              fullWidth={true}
              defaultValue={post.sources}
            />
          </Grid>    
          <Grid item xs={12}>
            <TextField
              className='post-field'
              id="country-update"
              name="country"
              label="Country"
              fullWidth={true}
              defaultValue={post.country}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className='post-field'
              id="state-update"
              name="state"
              label="State"
              fullWidth={true}
              defaultValue={post.state}
            />
          </Grid>      
          <Grid item xs={12} sm={12}>
            <Button
                
                fullWidth={true}
                variant="contained"
                color="link"
                onClick={() => {
                  updatePost(
                  {
                    id: post.id,
                    title: document.getElementById('title-update').value,
                    content: document.getElementById('post-field-update').value,
                    // image: document.getElementById('image-update'),
                    media: document.getElementById('media-update').value || 'none',
                    tags: document.getElementById('tags-update').value.split(),
                    sources: document.getElementById('sources-update').value.split(','),
                    country: document.getElementById('country-update').value,
                    state: document.getElementById('state-update').value,
                    token: token
                  }); 
                  enableEditing(false)}
                }
              >
                Save
              </Button>
              <Button 
                fullWidth={true}
                variant="contained"
                color="link"
                onClick={() => enableEditing(false)}
              >Go back</Button>
          </Grid>       
      </Grid>
    </React.Fragment>}
    </React.Fragment>
  );
}