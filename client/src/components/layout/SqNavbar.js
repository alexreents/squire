import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

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
          <Nav inline></Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LandNavbar;
