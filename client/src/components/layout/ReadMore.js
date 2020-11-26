import React from "react";
import ArrowCurveUp from "./images/arrow-curve-up.png";
import { Container, Row, Col } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

class ReadMore extends React.Component {
	state = {
		shown: true,
	};
		
	render() {		
		return (
            <div className="readMore">
                <Container>
                    <Row>
                        <Col>
                            <h4 onClick={() => this.setState({ shown: !this.state.shown })}><span><InfoCircle></InfoCircle></span><span>&nbsp;&nbsp;</span><text>What's this?</text></h4>
                        </Col>
                        <Col>
                            <img class="arrow-curve-up" src={ArrowCurveUp} alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5>{this.state.shown ? "" : "This text is JSON data, a structure commonly used for transmitting web data. The code here illustrates some fields commonly used by Twitter to categorize and target individuals (the actual ad content in this example has been modified). "}</h5>
                        </Col>
                    </Row>
                </Container>
            </div>		
		)
	}
}

export default ReadMore;