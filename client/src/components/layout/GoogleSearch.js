import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typing from 'react-typing-animation';
import GoogleTextBlack from "./images/google-text-black.png";

class GoogleSearch extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Col sm={4}>
                    <img class="GoogleText" src={GoogleTextBlack} alt=""/>  
                    <Typing loop="True">
                    <div id="google-search-bar">
                        <Typing.Delay ms={500} />
                        <span>Does Google stifle competition?</span>
                        <Typing.Delay ms={2000} />
                        <Typing.Backspace count={20} />
                        <Typing.Delay ms={500} />
                        <span>still innovate?</span>
                        <Typing.Delay ms={2000} />
                        <Typing.Backspace count={28} />
                    </div>
                    </Typing>
                </Col>
            </Row> 
        </Container>
      );
    }
  }
  
  export default GoogleSearch;    

/*

*/