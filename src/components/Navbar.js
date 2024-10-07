// src/components/NavBar.js

import React, { useState, useEffect } from 'react'; // Importing React and necessary hooks (useState, useEffect)
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'; // Importing Nav and renaming Navbar to BootstrapNavbar to avoid naming conflict
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing social media icons from react-icons
import logo from '../assets/img/logo.svg'; // Importing the logo image

// Defining the NavBar functional component
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // State to track the active navigation link
  const [scrolled, setScrolled] = useState(false); // State to manage scroll effect on the navbar

  // useEffect to add/remove scroll event listener
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) { // If scrolled more than 50px
        setScrolled(true); // Set scrolled state to true
      } else {
        setScrolled(false); // Otherwise, set it to false
      }
    };

    window.addEventListener("scroll", onScroll); // Adding the scroll event listener

    return () => window.removeEventListener("scroll", onScroll); // Cleanup: removing the event listener
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to update the active navigation link
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    // Using BootstrapNavbar instead of Navbar to avoid naming conflict
    <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <div className="container"> {/* Using a div with class "container" for consistent Bootstrap styling */}
        {/* Navbar Brand */}
        <BootstrapNavbar.Brand href="#home">
          <img src={logo} alt="Logo" /> {/* Displaying the logo */}
        </BootstrapNavbar.Brand>

        {/* Navbar Toggle for mobile view */}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span> {/* Icon for the toggle */}
        </BootstrapNavbar.Toggle>

        {/* Navbar Collapse */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/* Using Bootstrap's Nav component */}
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

          <span className='navbar-text'> {/* Span for additional navbar content */}
            <div className='social-icon'> {/* Container for social icons */}
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin /> {/* LinkedIn icon */}
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
                <FaGithub /> {/* GitHub icon */}
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaTwitter /> {/* Twitter icon */}
              </a>
            </div>

            <button className='vv' onClick={() => console.log('connect')}>
              Let's Connect {/* Button to connect */}
            </button>
          </span>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar; // Exporting the NavBar component for use in other files
