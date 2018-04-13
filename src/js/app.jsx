/*Router Page*/
const Style = require('../css/style.scss');
import Home from'./Components/home.jsx';
import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

  
    
 ReactDOM.render((
  <Router>
  <div>
    <Route exact path="/"  component={Home} />
    </div>
  </Router>
), document.getElementById('app'));