// src/App.js
import React from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />  // Renderiza la barra de navegación en la parte superior del encabezado
        <Logo />    // Muestra el logo de "Tu Leyenda" justo debajo del Navbar
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
