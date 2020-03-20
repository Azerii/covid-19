import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import TokenContext from '../../context/token/tokenContext';

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
  
  const classes = useStyles();

  const tokenContext = useContext(TokenContext);

  const { posts } = tokenContext;


  return (
    <React.Fragment>
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
          {posts.map(post => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.created_at}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.tags}</TableCell>
              <TableCell>{post.sources}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          
        </Link>
      </div> */}
    </React.Fragment>
  );
}