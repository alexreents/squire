import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Col>
                    <h6><b>Product</b></h6>
                    <text>One</text> <br></br>
                    <text>Two</text> <br></br>
                    <text>Three</text>
                </Col>
                <Col>
                    <h6><b>Product</b></h6>
                    <text>One</text> <br></br>
                    <text>Two</text> <br></br>
                    <text>Three</text>
                </Col>
                <Col>
                    <h6><b>Product</b></h6>
                    <text>One</text> <br></br>
                    <text>Two</text> <br></br>
                    <text>Three</text>
                </Col>
            </Row>
        </Container>
      );
    }
  }
  
  export default Footer;