import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link,Route} from 'react-router';
import Data from './login.js';






class App extends React.Component {
    render() {
return(
    <Router>
      <Link to = '/login'>login</Link>
        <Route path= '/login' component={Data} />
        
        </Router>
);
    }
}
ReactDOM.render(<App />, document.getElementById('roottwo'));


