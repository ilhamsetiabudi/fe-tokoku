import React from "react";
import {Navbar, Col } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Col md={2}>
        <center>
      <Navbar.Brand href="/home"><strong>Tokoku</strong> Apps</Navbar.Brand>
        </center>
      </Col>
    </Navbar>
  );
};

export default NavbarComponent;
