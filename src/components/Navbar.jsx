import React, { useState, useRef} from 'react';
import '../styles/Navbar.css';
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const Navbar = ({ onSectionChange }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  const handleSectionClick = (section) => {
    onSectionChange(section);
    setMenuOpen(false);
  };

  const handleClickOutside = (e) => {
    if (
      menuOpen &&
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(e.target)
    ) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Sandesh</div>

      <div
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        ref={toggleRef}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} ref={menuRef}>
        <li onClick={() => handleSectionClick('home')}>
          <FaHome className="nav-icon" /> Home
        </li>
        <li onClick={() => handleSectionClick('about')}>
          <FaUserAlt className="nav-icon" /> About
        </li>
        <li onClick={() => handleSectionClick('projects')}>
          <FaProjectDiagram className="nav-icon" /> Projects
        </li>
        <li onClick={() => handleSectionClick('contact')}>
          <FaEnvelope className="nav-icon" /> Contact
        </li>
      </ul>

      <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    </nav>
  );
};

export default Navbar;
