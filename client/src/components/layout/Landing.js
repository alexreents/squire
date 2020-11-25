import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LandNavbar from "./LandNavbar";
import { AnimatedBg, Transition } from 'scroll-background';

import Amazon_logo from "./logos/amazon.png"
import Facebook_logo from "./logos/facebook.png"
import Google_logo from "./logos/google.png"
import Instagram_logo from "./logos/instagram.png"
import Snapchat_logo from "./logos/snapchat.png"
import Spotify_logo from "./logos/spotify.png"
import Twitter_logo from "./logos/twitter.png"
import Youtube_logo from "./logos/youtube.png"

import { ArrowDownRight, ArrowDownLeft, ArrowDown } from 'react-bootstrap-icons';

import SocialAggregation from "./SocialAggregation";

const Example = () => (
  <AnimatedBg>
    <LandNavbar></LandNavbar>
    <div className="aboutSection">
      <Container>
        <Row>
          <h1>Your data belongs to you.</h1> 
        </Row>
        <Row>
          <h2>We're changing how it's used.</h2> 
        </Row>
        <Row>
          <h3>(here's why you should care)</h3> 
        </Row>
      </Container>
    </div>

    <Transition height="0vh" from="#000000" to="#000000"></Transition>

    <div className="infoSection">
    </div>

    <Transition height="100vh" from="#000000" to="#fff"></Transition>

    <div className="infoSection">
        <h1>Squire helps you aggregate your personal data,</h1>
        <h1>in whichever ways <i>you</i> decide.</h1> 
        
        <SocialAggregation></SocialAggregation>

    </div>

    <Transition height="100vh" from="#fff" to="#fff"></Transition>

    <div className="infoSection">
      <h1>Info</h1>
    </div>

    <Transition height="100vh" from="#fff" to="#3b5998"></Transition>

    <div className="infoSection" style={{ color: 'white'}}>
      <h1>Facebook</h1>
    </div>

    <Transition height="100vh" from="#3b5998" to="#00acee"></Transition>

    <div className="infoSection" style={{ color: 'white' }}>
      <h1>Twitter</h1>
    </div>

    <Transition height="100vh" from="#00acee" to="#ffce44"></Transition>

    <div className="infoSection">
      <h1>Google</h1>
    </div>

    <Transition height="100vh" from="#ffce44" to="#e47911"></Transition>

    <div className="infoSection" style={{ color: 'white' }}>
      <h1>Amazon</h1>
    </div>

    <Transition height="100vh" from="#e47911" to="#000000"></Transition> 

    <div className="infoSection" style={{ color: 'white' }}>
      <h1>Let's get started.</h1>
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