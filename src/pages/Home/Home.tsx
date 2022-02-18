import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" className="ponto">
                <Grid alignItems="flex-start" item xs={12} sm={6}>
                        <Box paddingX={10} className="img2">
                            <img src="https://i.imgur.com/sgYsG8J.png" width="400px" height="60px" />   

                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                            </Box>
                            <Button  variant="outlined" className="botao">Ver Postagens</Button>
                        </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src="https://i.imgur.com/dKAWh5f.gif" alt="" width="650px" height="630px" />
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
            </Grid>
        </>
    );
}

export default Home;