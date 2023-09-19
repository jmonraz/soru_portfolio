import React, { useState } from "react";
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Plans from "./pages/Plans";
import About from "./pages/About";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={`navbar ${showMenu ? 'open' : ''}`}>
        <div className="row">
          <h1>SV</h1>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <ul className={`menu ${showMenu ? 'open' : ''}`}>
          <li><NavLink to="/" activeClassName="active" onClick={() => setShowMenu(false)}>INICIO</NavLink></li>
          <li><NavLink to="/Planes" activeClassName="active" onClick={() => setShowMenu(false)} >PLANES</NavLink></li>
          <li><NavLink to="/Contacto" activeClassName="active" onClick={() => setShowMenu(false)} >CONTACTO</NavLink></li>
          <li><NavLink to="/Soru" activeClassName="active" onClick={() => setShowMenu(false)} >SORU</NavLink></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="/Planes" element={<Plans />} />
        <Route path="/Soru" element={<About />} />
      </Routes>
    </>
  );
};

export default App;