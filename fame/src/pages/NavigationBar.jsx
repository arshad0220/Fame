import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import logo from "./../images/logo.png";

const NavigationBar = () => {
  const [show, setShow] = useState(true)
  const handleShow = () => setShow(true);
  
  return (
    <Navbar bg="light" expand="lg" class>
      <Container>
        {/* Left corner logo */}
        <Navbar.Brand>
          <img
            src={logo}// Replace with the path to your logo
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        {/* Middle navigation buttons */}
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Buy Likes</Nav.Link>
          <Nav.Link as={Link} to="/followers">Buy Comments</Nav.Link>
          <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/supports">Supports</Nav.Link>
        </Nav>
        {/* Right corner cart icon */}
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/login">
            <BsCart size={30} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
