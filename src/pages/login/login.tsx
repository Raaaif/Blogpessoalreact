import React from "react";
import "./login.css";
import {Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Login(){
    return (
        <Grid container direction='row' justifyContent='center' alignItems="center"  style={{backgroundColor:'black'}}>
            <Grid alignItems="center" xs={5}>
                <Box paddingX={20}>
                    <form>
                    <img src="https://i.imgur.com/0IGWZjj.png" width="160px" height="100px" />    
                    <img src="https://i.imgur.com/DWlQQc4.gif" width="160px" height="100px" className='img3'/>                                          
                        <TextField style={{backgroundColor:'#008000'}} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth color="primary"/>
                        <TextField style={{backgroundColor:'#008000'}}id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' style={{color:'black', backgroundColor:'#008000'}}>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography  variant='subtitle1' gutterBottom align="center" style={{color:'#008000'}}>
                                Não Tem uma conta?
                            </Typography>
                        </Box>
                        <Typography  variant='subtitle1' gutterBottom align="center" style={{fontWeight: 'bold', color:'#05d805'}}>
                            Crie sua conta
                        </Typography>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={7} className="imagem">

            </Grid>

        </Grid>

    )

}

export default Login;