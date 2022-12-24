import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  let location = useLocation();
  let overlay = false;

  if (location.pathname === "/")
    overlay = true;

  return (
    <Navbar variant="dark" sticky="top" expand="md"
      className={overlay ? "navbar-overlay" : "navbar-default"}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="m-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-center"> Home </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-center"> About </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/security">
              <Nav.Link className="text-center"> Security </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/software">
              <Nav.Link className="text-center"> Software </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resources">
              <Nav.Link className="text-center"> Resources </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/gallery">
              <Nav.Link className="text-center"> Gallery </Nav.Link>
            </LinkContainer>
            <Nav.Link className="text-center" href="https://mailhide.io/e/0H2TCszk" target="_blank">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;

