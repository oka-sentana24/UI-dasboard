import React from 'react';
import { Box, makeStyles, Typography, Container, Card, Grid, Button} from '@material-ui/core' 

const useStyle = makeStyles((theme) =>({
    main:{
        background:"#dbdbdb",
        height:"50vh",
    },
    title:{
        padding:"30px",
        textAlign:"center"
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
    }
}))

export default function Blog(){
    const classes = useStyle();
    return(
       <Box className={classes.main}>
           <Container>
               <Box>
                    <Typography variant="h5" className={classes.title}>
                        Berita Terkini
                    </Typography>
               </Box>
                <Box>
                    <Card>
                        <Grid container className={classes.card}>
                            <Grid xs={6} className={classes.content}>
                                <img src="/images/jalan-sante.jpg" width="100%" className={classes.images}/>
                            </Grid>
                            <Grid xs={6}>
                                <Box className={classes.content}>
                                    <Typography variant="h6">
                                        Jalan Santai Bebas Plastik HUT Oneska 44
                                    </Typography>
                                </Box>
                                <Box className={classes.subcontent}>
                                    <Typography variant="p">
                                        Tak terasa tahun ini sekolah kita tercinta akan merayakan hari jadinya ke 44. Adapun kegiatan dalam rangka merayakan HUT Oneska ke 44 diadakan selama 2 hari dengan berbagai agenda kegiatan…
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button>More</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>
           </Container>
       </Box>
    )
}