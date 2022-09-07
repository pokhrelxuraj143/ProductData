import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Details from './Details';


export default function Menu() {
  return (
    <>
    <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="about"> About</Link></li>
        <li><Link to="services">Services</Link></li>
    </ul>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}
