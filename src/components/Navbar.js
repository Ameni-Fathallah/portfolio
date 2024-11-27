// src/components/NavBar.js

import React, { useState, useEffect } from 'react'; 
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'; 
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 
import logo from '../assets/img/logo.svg';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // State to track the active navigation link
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll); 
    return () => window.removeEventListener("scroll", onScroll); // Cleanup: removing the event listener
  }, []); // Empty dependency array ensures this runs once on mount

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <div className="container"> 
        <BootstrapNavbar.Brand href="#home">
          <img src={logo} alt="Logo" /> 
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span> {/* Icon for the toggle */}
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin /> 
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaTwitter />
              </a>
            </div>

            <button className='vv' onClick={() => console.log('connect')}>
              Let's Connect 
            </button>
          </span>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar; 
