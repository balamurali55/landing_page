import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import './NavBar.css'

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="light"
      className="mt-4 p-4 navbar"
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
    >
      <Container>
        <Navbar.Brand>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "white" }}
            width="32"
            height="32"
          >
            <g fill="#323334" fill-rule="evenodd">
              <path d="M0 32V.241h23.041zM31.15 32V.241h-4.411L17.48 13.158zM3.645 32l11.854-15.879L27.353 32z" />
            </g>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" id="dropdown">
          <Nav className="me-auto"></Nav>
          <Nav >
            <Nav.Link href="#deets">Product </Nav.Link>
            <Nav.Link href="#memes">Features </Nav.Link>
            <Nav.Link href="#memes">Pricing </Nav.Link>
            <hr />
            <Nav.Link href="#memes">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
