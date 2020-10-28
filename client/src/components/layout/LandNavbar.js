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
        <Navbar.Brand href="/">
          <h3>
            <b>squire</b>
          </h3>
        </Navbar.Brand>
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
                variant="outline-dark"
                className="shadow-none"
                id="getStarted"
              >
                <small>Get Started</small>
              </Button>
            </Nav>
          </BrowserView>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LandNavbar;
