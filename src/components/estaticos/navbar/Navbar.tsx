import React from 'react'
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokenReducer'
import { addToken } from '../../../store/tokens/actions'
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
        toast.info("Usuário deslogado",{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static" className='back'>
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
            <Link to='/formularioTema' className='text-decoration-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h5" color="inherit">
                    Cadastrar tema
                </Typography>
            </Box>
            </Link>
            
            <Box mx={1} className='cursor' onClick={goLogout}>
                <Typography variant="h5" color="inherit">
                    Logout
                </Typography>
            </Box>
        </Box>

    </Toolbar>
</AppBar>
    }
    
    return (
        <>
           {navbarComponent} 
        </>
    )
}

export default Navbar;