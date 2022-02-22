import React from 'react';
import { Box, Grid, Typography, Button, Paper } from '@material-ui/core'
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} className='h1'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'><img src="https://i.imgur.com/ucMUfvN.png" width="500px" height="100px" /></Typography>
                    </Box> 
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid className="mario" item xs={6}>
                    <img src="https://i.imgur.com/aamJONF.gif" alt="" width="420px" height="400px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;