import React from 'react';
import { Box, makeStyles, Typography, Container, Paper, Grid, Button} from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const useStyle = makeStyles((theme) =>({
    main:{
        background:"#dbdbdb",
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
                        Jurusan
                    </Typography>
               </Box>
               <Box>
                    <Typography className={classes.subtitle}>
                        Berbagai fasilitas yang dimiliki oleh SMK TI Bali Global Denpasar sangat lengkap, mulai dari fasilitas Lab Komputer masing-masing jurusan, ruangan belajar yang sangat nyaman, fasilitas internet yang lancar dan dapat diakses dari semua area sekolah serta kegiatan ekstra yang banyak pilihan untuk mendukung kreatifitas siswa.
                    </Typography>
               </Box>
                <Box className={classes.vasility}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                               <Box>
                                   <Typography variant="h5">
                                        Jurusan Akuntansi
                                   </Typography>
                               </Box>
                                {/* <Typography>
                                Administrasi perkantoran atau yang lebih dikenal dengan jurusan sekretaris merupakan salah satu jurusan unggulan di SMKN 1 Gianyar, Karena tiap tahunnya siswa yang ingin masuk ke jurusan ini sangat banyak. Jurusan Administrasi Perkantoran pilihan yang tepat bagi siswa yang ingin memiliki kemampuan manajemen administrasi.
Jurusan Administrasi perkantoran di SMK Negeri 1 Gianyar dipersiapkan agar bisa bersaing di dunia kerja baik itu dalam bidang administrasi, jasa perkantoran, bisnis dan jasa pelayanan publik. selain itu siswa di jurusan ini disiapkan agar terampil dalam aplikasi program administrasi dan bisnis.
                                </Typography> */}
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Box>
                                   <Typography variant="h5">
                                        Jurusan Akuntansi
                                   </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Box>
                                   <Typography variant="h5">
                                        Jurusan Akuntansi
                                   </Typography>
                               </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Box>
                                   <Typography variant="h5">
                                        Jurusan Akuntansi
                                   </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Box>
                                   <Typography variant="h5">
                                        Jurusan Akuntansi
                                   </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Box>
                                   <Typography variant="h5">
                                        Jurusan Akuntansi
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