import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './Header.css'; // Optional: Create and customize this file if desired

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">
          <Link to="/">Project's Corner</Link>
        </h1>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end activeclassname="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeclassname="active">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
