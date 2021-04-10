import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Layout from "../../components/layout/layout";
import Button  from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Breadcrumb from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  form: {
    width:"100%",
    border: "1px solid #ABB8C3",
    borderRadius: "5px",
    background: "#fff",
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
        <Link color="inherit" href="/siswa">
          Siswa
        </Link>
        <Link color="inherit" href="/siswa/create">
          Create
        </Link>
      </Breadcrumb>
      <Card>
        <form className={classes.root} noValidate autoComplete="off" method="POST">
          <Grid item xs={12} style={{display:"flex"}}>
            <Grid item xs={6}>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
              <ListItem> 
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
              <ListItem>
                <TextField className={classes.form} id="filled-basic" label="Nama Lengkap" variant="filled" />
              </ListItem>
            </Grid>
          </Grid>
        </form>
        <ListItem>
          <Grid item xs={12}>
              <div className={classes.new}>
                <Button onClick={handleClick}
                  variant="contained"
                  color="primary"
                  size="medium"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </div>
          </Grid>
        </ListItem>
      </Card>
    </Layout>
  );
}
