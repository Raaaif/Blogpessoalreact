import React, {ChangeEvent, useState, useEffect} from 'react';
import{Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import{Link, useHistory} from 'react-router-dom';
import {login} from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { api } from '../../services/Service';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import {toast} from 'react-toastify';

function Login(){
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] =useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        } 
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        useEffect(()=>{
            if (token !== ''){
                dispatch(addToken(token))
                history.push('/home')
            }
        },[token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)

                toast.success("Usuário logado com sucesso!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }catch{
                toast.error("Dados do usuário inconsistentes. Erro ao logar!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
        } 

        /* async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                const resposta = await api.post(`/usuarios/logar`, userLogin)
                setToken(resposta.data.token)
                
                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar');
            }
        } */

return(
    <Grid container direction='row' justifyContent='center'>
        <Grid className="fundo" xs={6}>
            <Box paddingX={20}>
                <form onSubmit={onSubmit}>
                    <Typography variant='h4' gutterBottom color='textPrimary' component='h4' align='center' className='textos'> Entre ou cadastre-se! </Typography>
                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                    <Box marginTop={2} textAlign='center'>
                        <Button type='submit' variant='contained' color='primary'>
                            Logar
                        </Button>
                    </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                    </Box >
                    <Link to='/cadastrousuario'>
                    <Typography variant='subtitle1' gutterBottom align='center' className='textos' > Crie sua conta</Typography>
                    </Link>
                </Box>
            </Box>
        </Grid>
        <Grid xs={6} className='imagem'>
        </Grid>
    </Grid>
);
}

export default Login;