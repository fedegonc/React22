// src/App.js
import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
// import './App.css'; // Eliminado para usar Bootstrap

function App() {
  return (
    <div className="container text-center">
      <header className="bg-light p-5 rounded">
        <Navbar />
        <Logo />
        
        
      </header>
    </div>
  );
}

export default App;
