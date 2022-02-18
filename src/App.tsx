import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import Navbar from './Components/static/navbar/Navbar';
import Login from './pages/login/login';
import Footer from './Components/static/footer/footer'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


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
          </div>
        </Switch>
        <Footer /> 
    </Router>
 );
}

export default App;
