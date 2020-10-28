import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LandNavbar from "./LandNavbar";

class Landing extends Component {
  render() {
    return (
      <div class="main">
        <LandNavbar></LandNavbar>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4 font-weight-bold">Squire Capital</h1>
          <div class="row justify-content-center">
            <p class="lead">
              It's time for us to benefit from our personal data. With Squire,
              you can aggregate your data today, and invest in the technology of
              tomorrow.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
