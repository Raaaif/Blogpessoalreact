import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid alignItems="flex-start" item xs={12}> 
                    <Box style={{ backgroundColor: "black", height: "100px" }}>
                        <Box paddingTop={1} display="flex" alignItems="flex-start" justifyContent="flex-start">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "#3eff3e" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" className="center"> 
                            <a href="https://www.facebook.com/Raaifsousa" target="_blank">
                                <FacebookIcon style={{ fontSize: 40, color: "#3eff3e" }} />
                            </a>
                            <a href="https://www.instagram.com/sousaraaif/" target="_blank">
                                <InstagramIcon style={{ fontSize: 40, color: "#3eff3e" }} />
                            </a>
                            <a href="https://github.com/Raaaif" target="_blank">
                                <GitHubIcon style={{ fontSize: 40, color: "#3eff3e" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "#3eff3e" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "black", width: "100vh", height: "50px" }}>
                        <Box paddingTop={1} display="flex" alignItems="flex-start" justifyContent="flex-start">
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#3eff3e" }} >© 2022 Copyright</Typography>
                        </Box>

                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Footer;