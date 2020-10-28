import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button } from "react-bootstrap";

class LandNavbar extends Component {
  render() {
    return (
      <Navbar id="navbar" className="shadow-none">
        <Navbar.Brand href="/">
          <h3>
            <b>squire</b>
          </h3>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav inline>
            <Button
              href="/register"
              //href="/"
              variant="outline-dark"
              className="shadow-none"
              id="getStarted"
            >
              <small>Get Started</small>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LandNavbar;
