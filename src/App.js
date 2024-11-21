// src/App.js
import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Logo />
        
        
      </header>
    </div>
  );
}

export default App;
