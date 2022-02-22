import React from 'react';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';

import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
        <div>

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>
            <Route path='/temas'>
              <ListaTema />
            </Route>
            <Route path='/posts'>
              <ListaPostagem />
            </Route>
          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;