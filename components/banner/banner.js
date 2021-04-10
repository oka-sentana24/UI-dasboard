import React from 'react';
import { Box, Grid, makeStyles, Container, Typography, Button } from '@material-ui/core';

const useStyle = makeStyles((theme) =>({
    main:{
        background:"#fff",
        height:"auto",
        color:"#007bff"
    },
    content:{
        padding:"100px 0px"
    },
    title:{
        padding:"20px 0px"
    },
    img:{
        width:"100%"
    },
    description:{
        width: "90%",
        color:"#4F5868",
        lineHeight:"30px"
    },
    btn:{
        padding:"30px 0px"
    }

}))


export default function banner(){
    const classes = useStyle();
    return(
        <Box className={classes.main}>
            <Container>
                <Grid container spacing={3}>
                    <Grid xs={6} className={classes.content}>
                        <Box className={classes.title}>
                            <Typography variant="h4">ONE_SKA</Typography>
                        </Box>
                        <Box className={classes.description}>
                            <Typography variant="p">Selamat Datang di SMK Negeri 1 Gianyar. Sekolah Menengah Kejuruan Favorit yg ada di Kota Gianyar. SMK Negeri 1 Gianyar yang lebih dikenal dengan sebutan “ONESKA” berdiri sejak th 1976 di atas tanah seluas 20are.</Typography>
                        </Box>
                        <Box  className={classes.btn}>
                            <Button 
                            variant="contained" 
                            color="primary"
                            >
                                Pendaftaran PPDB
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <img src="/images/Student.png"
                            className={classes.img}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}