import React from 'react';
import { Box, makeStyles, Container, Typography, Link, Grid, Paper} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#222",
    color:"#fff"
    // height:"30vh",
  },
  Copyright:{
    color:"#fff",
    padding:"10px",
  },
  hr:{
    width:"30%",
    marginLeft:"0"
  }
}));

export default function Footer(){
  const classes = useStyles();
  return(
    <Box className={classes.main}>
      <Container>
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={3}>
              <Typography variant="p">SMK NEGERI 1 GIANYAR</Typography>
              <hr className={classes.hr}/>
              <Typography>
              Jl. Mulawarman, Abianbase, Kec. Gianyar, Kabupaten Gianyar, Bali 80515
              <br/>
              Phone Number: +62 (361) 943414
              <br/>
              Fax: +62 (361) 701907
              <br/>
              Email: 	smkn1_gianyar@yahoo.com
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="p">PPDB 2020/2021</Typography>
                <hr className={classes.hr}/>
                <Link href="#">
                <Typography>Jalur Afirmasi</Typography>
              </Link>
              <Link href="#">
                <Typography>Jalur Prestasi</Typography>
              </Link>
              <Link href="#">
                <Typography>Jalur Lapor</Typography>
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="p">AKADEMIK</Typography>
              <hr className={classes.hr}/>
              <Link href="#">
                <Typography>Jurusan Akuntansi</Typography>
              </Link>
              <Link href="#">
                <Typography>Jurusan ADM.Perkantoran</Typography>
              </Link>
              <Link href="#">
                <Typography>Jurusan Pemasaran</Typography>
              </Link>
              <Link href="#">
                <Typography>Jurusan TKJ</Typography>
              </Link>
              <Link href="#">
                <Typography>Jurusan RPL</Typography>
              </Link>
              <Link href="#">
                <Typography>Jurusan Multimedia</Typography>
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="p">SOCIAL MEDIA</Typography>
                <hr className={classes.hr}/>
              <Grid container spacing={3} >
                  <Grid item><FacebookIcon/></Grid>
                  <Grid item><InstagramIcon/></Grid>
                  <Grid item><TwitterIcon/></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <hr/>
          <Typography variant="body2" align="center" className={classes.Copyright} >
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              SMK NEGERI 1 GIANYAR
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}