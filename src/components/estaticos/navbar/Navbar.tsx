import React from 'react'
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <AppBar position="static" className='back'>
                    <Box className='cursor' >
                        <Grid className='title'>
                            <img src='https://i.imgur.com/XmO3wPh.png'/>
                        </Grid>
                    </Box>
                <Toolbar variant="dense" className='bar'>

                    <Box display="flex" justifyContent="start" >
                        <Link to='/home' className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/posts' className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas' className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decoration-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h5" color="inherit">
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