import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%"
  },
  padding:{
    padding:"10px"
  },
  buttonColor:{
    background:"#194D33",
    color:"#fff"
  },
}));

export default function FormLogin({ props }) {
  const {
    onSubmitHandler,
    onChangeHandler,
    stateFormData,
    stateFormError,
    stateFormMessage,
  } = props;
  const classes = useStyles();

  return (
    <main>
        <form method="POST" onSubmit={onSubmitHandler}>
          <Box className={classes.padding}>
            <TextField
            className={classes.root}
            id="standard-basic" 
            label="Email" 
            type="text"
            name="email"
            onChange={onChangeHandler}
            value={stateFormData.email.value}
            />
            {stateFormError.email && (
              <span className="warning">{stateFormError.email.hint}</span>
            )}
          </Box>
          <Box className={classes.padding}>
            <TextField
            className={classes.root}
            id="standard-basic" 
            label="Password" 
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={stateFormData.email.password}
            />
          </Box>
          <Box className={classes.padding}>
            <Button type="submit" className={classes.buttonColor} variant="contained" color="primary">Login</Button>
          </Box>
        </form>
    </main>
  );
}