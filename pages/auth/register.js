import React from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Typography, Grid} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Layout from "./layout";

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
  boxpadding:{
    padding:"30px 0px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Layout>
        <Box className={classes.paper}>
          <img src="/images/logo.png" alt="SMK NEGERI 1 GIANYAR" width="100px"/>
          <Box className={classes.boxpadding}>
            <Typography component="h1" variant="h5">
              Silahkan Daftar
            </Typography>
          </Box>
          <form className={classes.form} noValidate>
            <TextField
              id="standard-basic"
              margin="normal"
              required
              fullWidth
              label="NIS"
              name="email"
              autoComplete="email"
              autoFocus
            />
             <TextField
              id="standard-basic"
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              id="standard-basic"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="standard-basic"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Tulis Ulang Password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            Daftar
            </Button>
            <Grid container>
              <Grid item xs align="center">
                Sudah terdaftar?
                <Link href="#" variant="body2">
                 Masuk
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
    </Layout>
  );
}