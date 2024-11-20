import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Componente de navegación que vamos a crear.
import Home from './pages/Home'; // Página de inicio que crearemos.
import Catalog from './pages/Catalog'; // Página del catálogo.
import Contact from './pages/Contact'; // Página de contacto.

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
