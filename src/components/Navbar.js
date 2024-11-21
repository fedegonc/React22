// src/components/Navbar.js
import React from 'react';
// import './Navbar.css'; // Eliminado para usar Bootstrap

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link" href="#$1">Inicio</a></li>
        <li className="nav-item"><a className="nav-link" href="#$1">Catálogo</a></li>
        <li className="nav-item"><a className="nav-link" href="#$1">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
