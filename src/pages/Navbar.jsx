import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import React, { useState, useEffect } from 'react';
export default  function Navbars(){
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.custom-navbar');
          if (navbar) {
            if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
          }
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    
    return(
        <div>
            <Navbar fixed="top" expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home" className="name">Hricha Maharjan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                        <Nav.Link  href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
                      
                    </Nav>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>

        </div>
    )
}