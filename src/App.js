// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

const Nav = () => {
  const location = useLocation();
  
  return (
    <nav>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">Acerca de</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
