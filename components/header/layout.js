import React from 'react';
import { Box, makeStyles, Grid, Container } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    main:{
        background:"#fff",
        padding:"10px"
    }

}));

export default function layoutHeader({children}){
    const classes = useStyle();
    return (
        <Box className={classes.main}>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Box>
    )
}