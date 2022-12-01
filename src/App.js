import React from 'react';

import {Hours, Grid, Navbar, About } from './components'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <About />
      <Grid />
      <Hours/>
       </div>
       <Navbar />
      </div>
  ); 
}

export default App;

