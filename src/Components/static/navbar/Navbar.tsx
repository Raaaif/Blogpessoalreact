import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    return (
        <>
            <Box className="bkColor" >
                <Grid className='style'>
                    <img src='https://i.imgur.com/XmO3wPh.png'/>
                </Grid>
            </Box>
            <AppBar position="static" className="backColor">
                <Toolbar variant="dense">

                    <Box className="backColor" >
                        <Box mx={4} className="bColor" style={{ cursor: "pointer", color:'#05d805' }}>
                            <Link to="/home" className='text-decorator-none'>
                            <Typography variant="h6" color="inherit">
                               Home
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={4} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={4} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={4} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                               Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box   className="bColor" style={{ cursor: "pointer", color:'#05d805' }}>
                                <Typography variant="h6" color="inherit">
                                        Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;