import React from 'react';
import { Box, makeStyles, Typography, Container, Paper, Grid, Button} from '@material-ui/core' 

const useStyle = makeStyles((theme) =>({
    main:{
        background:"#fff",
    },
    title:{
        padding:"30px",
        textAlign:"center"
    },
    subtitle:{
        textAlign:"center",
    },
    card:{
        height:"30vh",
        padding:"20px",
    },
    content:{
        padding:"10px",
    },
    subcontent:{
        padding:"10px",
        lineHeight:"30px",
    },
    images:{
        width:"100%",
        objectFit:"cover",
        height: "24vh",
    },
    vasility:{
        padding:"20px 20px",
    },
    vasilityCard:{
        padding:"20px"
    },
    paper:{
        boxShadow:"0px 2px 15px rgb(0 0 0 / 10%)",
    }
}))

export default function Vasilitas(){
    const classes = useStyle();
    return(
       <Box className={classes.main}>
           <Container>
               <Box>
                    <Typography variant="h5" className={classes.title}>
                        Vasilitas Sekolah
                    </Typography>
               </Box>
               <Box>
                    <Typography className={classes.subtitle}>
                        Berbagai fasilitas yang dimiliki oleh SMK TI Bali Global Denpasar sangat lengkap, mulai dari fasilitas Lab Komputer masing-masing jurusan, ruangan belajar yang sangat nyaman, fasilitas internet yang lancar dan dapat diakses dari semua area sekolah serta kegiatan ekstra yang banyak pilihan untuk mendukung kreatifitas siswa.
                    </Typography>
               </Box>
                <Box className={classes.vasility}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Box className={classes.vasilityCard}>
                                    <img src="/images/jalan-sante.jpg" width="100%"/>
                                    <Typography>
                                        Lab Komputer Lengkap
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Box className={classes.vasilityCard}>
                                    <img src="/images/jalan-sante.jpg" width="100%"/>
                                    <Typography>
                                        Lab Komputer Lengkap
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Box className={classes.vasilityCard}>
                                    <img src="/images/jalan-sante.jpg" width="100%"/>
                                    <Typography>
                                        Lab Komputer Lengkap
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Box className={classes.vasilityCard}>
                                    <img src="/images/jalan-sante.jpg" width="100%"/>
                                    <Typography>
                                        Lab Komputer Lengkap
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
           </Container>
       </Box>
    )
}