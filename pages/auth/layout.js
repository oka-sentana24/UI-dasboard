import React from 'react';
import { Paper, Box, Grid} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../components/footer/footer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    overflowX:"hidden",
  },
  image: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    width:"100%",
    height:"100vh"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:"auto"
  },
  loginGrid: {
    position:"absolute",
    top:"0",
    height: "inherit"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding:"0px 50px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  footer:{
      position:"absolute",
      bottom:"0px",
      background:"#194D33",
      color:"#fff",
      width:"100%",
      padding:"20px"
  }
}));

export default function layout({children}) {
  const classes = useStyles();

  return (
    <main>
        <Box container component="main" className={classes.root}>
          <CssBaseline />
          <Grid className={classes.image}/>
          <Grid item xs={12} sm={7} md={4} component={Paper} elevation={6} square className={classes.loginGrid}>
           {children}
          </Grid>
        </Box>
        <Box className={classes.footer}>
            <Footer/>
        </Box>
    </main>
  );
}