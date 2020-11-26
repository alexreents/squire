import React, { Component } from "react";
import { ArrowRight } from 'react-bootstrap-icons';

class ReadMore extends React.Component {
	state = {
		shown: true,
	};
		
	render() {		
		return (
			<div className="readMore">
                <h4 onClick={() => this.setState({ shown: !this.state.shown })}>What's this? <ArrowRight></ArrowRight></h4>
				<h5>{this.state.shown ? "" : "This text is JSON data, a structure commonly used for transmitting web data. The code here illustrates some fields commonly used by Twitter to categorize and target individuals (the actual ad content in this example has been modified). "}</h5>
			</div>
		)
	}
}

export default ReadMore;