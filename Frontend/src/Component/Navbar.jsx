import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar-brand">
        <NavLink to="/">PortFolio</NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/technologies" className={({ isActive }) => isActive ? 'active' : ''}>Technology</NavLink>
        <NavLink to="/competitive-coding" className={({ isActive }) => isActive ? 'active' : ''}>Coding Profiles</NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
