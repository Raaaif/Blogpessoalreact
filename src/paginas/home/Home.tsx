import React, { useEffect } from 'react';
import { Box, Grid, Typography, Button, Paper } from '@material-ui/core'
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useHistory } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokenReducer';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';

function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
          toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
     history.push("/login")
  
      }
  }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} className='h1'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'><img src="https://i.imgur.com/zwClKu0.png" width="300px" height="100px" /></Typography>
                    </Box> 
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className='text-decorator-none'>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid className="mario" item xs={6}>
                    <img src="https://i.imgur.com/tH8Cjye.gif" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;