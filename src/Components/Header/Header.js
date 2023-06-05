import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
      <i className="fa-solid fa-mug-saucer me-1"></i>React Bootstrap 
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}
