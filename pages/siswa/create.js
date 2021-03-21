import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Layout from "../Layout/layout";
import Toolbar from "@material-ui/core/Toolbar";
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import Breadcrumb from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <Layout>
      <Breadcrumb aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumb>

      <form className={classes.root} noValidate autoComplete="off">
        <List>
          <ListItem>
            <TextField id="standard-basic" label="Standard" />
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" label="Standard" />
          </ListItem>
          <ListItem>
            <TextField id="standard-basic" label="Standard" />
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
