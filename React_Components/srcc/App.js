import React from 'react';
import './App.css';
import Navi from './components/navi';
import Login from './components/login';
import Register from './components/register'
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import Profile from './components/profile'

function App() {
  return (
    <div>
     
    <div >
      <Router>
        
         
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login}/>
          
        
         <Route path="/profile" exact component={Profile}/>
      </Router>
    </div>
    </div>
  );
}

export default App;
