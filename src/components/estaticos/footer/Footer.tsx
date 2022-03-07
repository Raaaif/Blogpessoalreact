import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

      var footerComponent;
      
    if(token !== ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos1'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/Raaifsousa" target="_blank">
                            <FacebookIcon className='redes'/>
                            </a>
                            <a href="https://www.instagram.com/sousaraaif" target="_blank">
                                <InstagramIcon className='redes'/>
                            </a>
                            <a href="https://www.linkedin.com/raaaif" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a href="https://github.com/Raaaif" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                        </Box>

                    </Box>

                </Grid>
            </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;