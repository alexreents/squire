import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LandNavbar from "./LandNavbar";

import { AnimatedBg, Transition } from 'scroll-background';

const Example = () => (
  <AnimatedBg>
    <LandNavbar></LandNavbar>
    <div style={{ height: '50vh' }}>
    </div>
    <Transition height="50vh" from="#000000" to="#fff"></Transition>
    <div style={{ height: '50vh' }}>
      <h1>Info</h1>
    </div>
    <Transition height="50vh" from="#fff" to="#fff"></Transition>
    <div style={{ height: '50vh' }}>
      <h1>Info</h1>
    </div>
    <Transition height="50vh" from="#fff" to="#3b5998"></Transition>
    <div style={{ height: '50vh' }}>
      <h1 style={{ color: 'white' }}>Facebook</h1>
    </div>
    <Transition height="50vh" from="#3b5998" to="#00acee"></Transition>
    <div style={{ height: '50vh' }}>
      <h1 style={{ color: 'white' }}>Twitter</h1>
    </div>
    <Transition height="50vh" from="#00acee" to="#ffce44"></Transition>
    <div style={{ height: '50vh' }}>
      <h1 style={{ color: 'black' }}>Google</h1>
    </div>
    <Transition height="50vh" from="#ffce44" to="#e47911"></Transition> 
    <div style={{ height: '50vh' }}>
      <h1 style={{ color: 'white' }}>Amazon</h1>
    </div>
    <Transition height="50vh" from="#e47911" to="#000000"></Transition> 
    <div style={{ height: '100vh' }}>
      <h1 style={{ color: 'white' }}>Let's get started.</h1>
    </div>
  </AnimatedBg>
)

export default Example;

/*
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
*/