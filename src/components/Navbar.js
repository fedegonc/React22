// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/catalog">Catálogo</Link>
            <Link to="/contact">Contacto</Link>
        </nav>
    );
}

export default Navbar;
