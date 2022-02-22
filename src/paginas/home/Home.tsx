import React from 'react';
import { Box, Grid, Typography, Button, Paper } from '@material-ui/core'
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} className='h1'>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'><img src="https://i.imgur.com/ucMUfvN.png" width="300px" height="100px" /></Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://i.imgur.com/sy0O2UI.gif" alt="" width="120px" height="100px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;