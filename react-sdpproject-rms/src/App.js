import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Routes } 
from  'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
function App() {
  return (
    <>
    <Router>
    <Navbar />
 
    <switch>
          <Routes path='/' exact component={Home} />


        </switch>
    
    </Router>
    </>
  );
}

export default App;
