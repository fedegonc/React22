// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  // Estado para manejar la página activa
  const [currentPage, setCurrentPage] = useState('home');

  // Función para cambiar de página
  const navigate = (page) => {
    setCurrentPage(page);
  };

  // Contenido que se mostrará dependiendo de la página activa
  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <div>
          <h1>Bienvenido a SPA Tallados</h1>
          <p>Tu Leyenda Tallados surge en 2020 con el propósito de diseñar piezas de madera personalizadas y duraderas.</p>
        </div>
      );
    } else if (currentPage === 'catalog') {
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
    } else if (currentPage === 'contact') {
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
  };

  return (
    <div className="App">
      <Navbar onNavigate={navigate} />
      <div className="App-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
