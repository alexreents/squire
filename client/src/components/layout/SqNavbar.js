import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";

class SqNavbar extends Component {
  render() {
    return (
      <Navbar bg="white" className="shadow-none">
        <Navbar.Brand href="/">squire</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav inline>
            <Nav.Link href="/register">Get Started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SqNavbar;
