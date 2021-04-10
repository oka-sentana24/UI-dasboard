import React from 'react';
import { Box, makeStyles, Grid, Container, Link, Button, MenuItem } from '@material-ui/core';
import Layout from '../layout';
import Icon from '@material-ui/icons/KeyboardArrowDown';
import Menu from 'material-ui-popup-state/HoverMenu';

const useStyle = makeStyles((theme) =>({
    logo:{
        padding:"0px 10px",
    },
    title:{
        padding:"19px 0px",
        color:"#666",
    },
    menuItem:{
        padding:"19px 10px",
        color:"#666",
        textTransform: "none",
    },
    menu:{
        margin:"50px 0px",
    }
}));

function webBar(){
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [anchorE3, setAnchorE3] = React.useState(null);
    const open = Boolean(anchorEl);
    const openE1 = (event) => {
        closeE2();
        closeE3();
        setAnchorEl(event.currentTarget);
      };
    
    const closeE1 = () => {
        setAnchorEl(null);
      };
    const openE2 = (event) => {
        closeE1();
        closeE3();
        setAnchorE2(event.currentTarget);
      };
    
    const closeE2 = () => {
        setAnchorE2(null);
      };
    const openE3 = (event) => {
        closeE1();
        closeE2();
        setAnchorE3(event.currentTarget);
      };
    
    const closeE3 = () => {
        setAnchorE3(null);
      };
    return(
        <Layout>
            <Container>
                <Grid container item xs={12} spacing={0}>
                    <Grid item xs={4}>
                        <Link href="#">
                            <Grid container item xs={12}>
                                <Box item xs={2} className={classes.logo}>
                                    <img src='/images/logo.png' alt='Logo' width='50px'/>
                                </Box>
                                <Box item xs={2} className={classes.title}>
                                    ONE SKA
                                </Box>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container item xs={12}>
                            <Box>
                                <Button item xs={2} className={classes.menuItem}>
                                    Beranda
                                </Button>
                            </Box>
                            <Box>
                                <Button item xs={2} className={classes.menuItem}
                                    aria-haspopup="true"
                                    onMouseEnter={openE1}
                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                >
                                Tentang Oneska
                                <Icon/>
                                </Button>
                                <Menu
                                    id="mouse-over-popover"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onMouseLeave={closeE1}
                                    className={classes.menu}
                                >
                                    <MenuItem>Sejarah Singkat</MenuItem>
                                    <MenuItem>Visi Misi</MenuItem>
                                    <MenuItem>Sarana Dan Prasarana</MenuItem>
                                </Menu>
                            </Box>
                            <Box>
                                <Button item xs={2} className={classes.menuItem}
                                    aria-haspopup="true"
                                    onMouseEnter={openE2}
                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                >
                                    Akademik
                                <Icon/>
                                </Button>
                                <Menu
                                    id="mouse-over-popover"
                                    anchorEl={anchorE2}
                                    keepMounted
                                    open={Boolean(anchorE2)}
                                    onMouseLeave={closeE2}
                                    className={classes.menu}
                                >
                                    <MenuItem>Jurusan Akuntansi</MenuItem>
                                    <MenuItem>Jurusan ADM. Perkantoran</MenuItem>
                                    <MenuItem>Jurusan Pemasaran</MenuItem>
                                    <MenuItem>Jurusan Teknik Komputer dan Jaringan</MenuItem>
                                    <MenuItem>Jurusan Rekayasa Perangkat Lunak</MenuItem>
                                    <MenuItem>Jurusan Multimedia</MenuItem>
                                    <MenuItem>Ekstra Kulikuler</MenuItem>
                                </Menu>
                            </Box>
                            <Box>
                                <Button item xs={2} className={classes.menuItem}>
                                    Berita
                                </Button>
                            </Box>
                            <Box>
                                <Button item xs={2} className={classes.menuItem}
                                    aria-haspopup="true"
                                    onMouseEnter={openE3}
                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                >
                                PPDB 2020/2021
                                <Icon/>
                                </Button>
                                <Menu
                                    id="mouse-over-popover"
                                    anchorEl={anchorE3}
                                    keepMounted
                                    open={Boolean(anchorE3)}
                                    onMouseLeave={closeE3}
                                    className={classes.menu}
                                >
                                    <MenuItem>Jalur Afirmasi</MenuItem>
                                    <MenuItem>Jalur Prestasi</MenuItem>
                                    <MenuItem>Jalur Nilai Rapor</MenuItem>
                                </Menu>
                            </Box>
                            <Box>
                                <Button item xs={2} className={classes.menuItem}>
                                    Materi
                                </Button>
                            </Box>
                            <Box>
                                <Button item xs={2} className={classes.menuItem}>
                                    Kontak
                                </Button>
                            </Box>
                            <Box>
                                <Button color="primary" item xs={2} className={classes.menuItem}>
                                    Forum Diskusi
                                </Button>
                            </Box>
                            
                            {/* <Button item xs={2} className={classes.menuItem}
                            aria-haspopup="true"
                            onMouseEnter={openE2}
                            >
                               Akademik
                               <Icon/>
                            </Button>
                            <Menu

                                anchorE2={anchorE2}
                                keepMounted
                                open={Boolean(anchorE2)}
                                onMouseLeave={closeE2}
                                className={classes.menu}
                            >
                                <MenuItem>Jurusan Akuntansi</MenuItem>
                                <MenuItem>Jurusan ADM. Perkantoran</MenuItem>
                                <MenuItem>Jurusan Pemasaran</MenuItem>
                                <MenuItem>Jurusan Teknik Komputer dan Jaringan</MenuItem>
                                <MenuItem>Jurusan Rekayasa Perangkat Lunak</MenuItem>
                                <MenuItem>Jurusan Multimedia</MenuItem>
                                <MenuItem>Ekstra Kulikuler</MenuItem>
                            </Menu> */}
                            {/* <Button item xs={2} className={classes.menuItem}>
                               Berita
                            </Button>
                            <Button item xs={2} className={classes.menuItem}>
                               PPDB 2020/2021
                               <Icon/>
                            </Button>
                            <Button item xs={2} className={classes.menuItem}>
                               Materi
                            </Button>
                            <Button item xs={2} className={classes.menuItem}>
                               Kontak
                            </Button>
                            <Button item xs={2} className={classes.menuItem}>
                               Login
                            </Button> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default webBar;