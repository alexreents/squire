import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { Nav, Button } from "react-bootstrap";

class LandNavbar extends Component {
  render() {
    return (
      <Navbar id="navbar" className="shadow-none">
        <Navbar.Brand id="navbar-brand" href="/register">
          <h3>
            <b>squire</b>
          </h3>
        </Navbar.Brand>
        
      </Navbar>
    );
  }
}

export default LandNavbar;

/*
removing temporarily

<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto"></Nav>
  <Link to="/whitepaper" className="mr-4 waves-effect whitepaper-link">
    Whitepaper
  </Link>
  <BrowserView>
    <Nav inline>
      <Button
        href="/register"
        //href="/"
        variant="outline-light"
        className="shadow-none"
        id="getStarted"
      >
        <small>Get Started</small>
      </Button>
    </Nav>
  </BrowserView>
</Navbar.Collapse>

*/