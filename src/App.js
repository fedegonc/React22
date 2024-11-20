// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Componentes de las páginas que vamos a crear
function Home() {
  return (
    <div>
      <h1>Bienvenido a SPA Tallados</h1>
      <p>Tu Leyenda Tallados surge en 2020 con el propósito de diseñar piezas de madera personalizadas y duraderas.</p>
    </div>
  );
}

function Catalog() {
  return (
    <div>
      <h1>Catálogo de Tallados</h1>
      <div>
        <h2>Tallados en Relieve</h2>
        <p>Piezas que destacan por detalles elevados, ideales para decoración.</p>
        <h2>Tallados Hundidos</h2>
        <p>Diseños esculpidos hacia adentro, perfectos para un toque moderno.</p>
        <h2>Carteles Pintados</h2>
        <p>Carteles personalizados para negocios o decoraciones.</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contacto</h1>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" placeholder="Tu nombre completo" />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" placeholder="tu_email@ejemplo.com" />
        </div>
        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Inicio</Link>
          <Link to="/catalog">Catálogo</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
