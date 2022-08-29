import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// importing general components
import NavBar from './components/general/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>E-Commerce Front End</h1>
      </div>
    </Router>
  );
}

export default App;
