import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Amazon_logo from "./images/amazon.png"
import Facebook_logo from "./images/facebook.png"
import Google_logo from "./images/google.png"
import Instagram_logo from "./images/instagram.png"
import Snapchat_logo from "./images/snapchat.png"
import Spotify_logo from "./images/spotify.png"
import Twitter_logo from "./images/twitter.png"
import Youtube_logo from "./images/youtube.png"

import { 
    ArrowDownRight, 
    ArrowDownLeft, 
    ArrowDown,
    ArrowRight, 
    ArrowLeft, 
    ArrowUpRight, 
    ArrowUp, 
    ArrowUpLeft } from 'react-bootstrap-icons';

class SocialAggregation extends Component {
    render() {
      return (
        <Container className="aggregationContainer">
          <Row className="aggregationRow">
            <Col>
              <Row>
                <Col className="social-logo"><img src={Instagram_logo} alt=""/></Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col><ArrowDownRight className="arrow"></ArrowDownRight></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="social-logo-sm-top"><img src={Facebook_logo} alt=""/></Col>
              </Row>
              <Row>
                <Col>
                  <ArrowDown className="arrow"></ArrowDown>
                </Col>  
              </Row>
            </Col>
            <Col>
              <Row>
                <Col></Col>
                <Col className="social-logo"><img src={Amazon_logo} alt=""/></Col>
              </Row>
              <Row>
                <Col><ArrowDownLeft className="arrow"></ArrowDownLeft></Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <Row className="aggregationRow">
            <Col>
              <Row>
                <Col className="social-logo"><img src={Twitter_logo} alt=""/></Col>
                <Col><ArrowRight className="arrow"></ArrowRight></Col>
              </Row>
            </Col>
            <Col className="center-logo">
              <h1>squire</h1>
            </Col>
            <Col>
              <Row>
                <Col><ArrowLeft className="arrow"></ArrowLeft></Col>
                <Col className="social-logo"><img src={Google_logo} alt=""/></Col>
              </Row>
            </Col>
          </Row>
          <Row className="aggregationRow">
            <Col>
              <Row>
                <Col></Col>
                <Col><ArrowUpRight className="arrow"></ArrowUpRight></Col>
              </Row>
              <Row>
                <Col className="social-logo"><img src={Youtube_logo} alt=""/></Col>
                <Col></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col><ArrowUp className="arrow"></ArrowUp></Col>
              </Row>
              <Row>
                <Col className="social-logo-sm-bottom"><img src={Spotify_logo} alt=""/></Col>  
              </Row>
            </Col>
            <Col className="social-logo">
              <Row>
                <Col><ArrowUpLeft className="arrow"></ArrowUpLeft></Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col><img src={Snapchat_logo} alt=""/></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default SocialAggregation;
  