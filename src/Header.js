import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand>React Workshop Lab</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#feeds">Feeds</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
