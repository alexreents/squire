import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LandNavbar from "./LandNavbar";
import { AnimatedBg, Transition } from 'scroll-background';
import SocialAggregation from "./SocialAggregation";
import WhiteTwitterLogo from "./images/white-twitter.png"
import JSONPretty from 'react-json-pretty';
import FacebookScreenshot from "./images/facebook-screenshot.png"
import GoogleText from "./images/google-text.png";
import FacebookText from "./images/facebook-text.png";
import AmazonText from "./images/amazon-text.png";
import ReadMore from "./ReadMore";
import Footer from "./Footer";

const twitterJSON = 

{ 
  "promotedTweetInfo" : {
  "tweetId" : "0301605147662229921",
  "tweetText" : "ionized water makes it even smarter.",
  },
  "advertiserInfo" : {
    "advertiserName" : "waterco",
    "screenName" : "@waterco"
  },
  "matchedTargetingCriteria" : [ {
    "targetingType" : "Conversation topics",
    "targetingValue" : "Exercises"
  },
  {
    "targetingType" : "Conversation topics",
    "targetingValue" : "Health"
  },
  {
    "targetingType" : "Age",
    "targetingValue" : "18 to 49"
  }],
  "engagementAttributes" : [ {
    "engagementTime" : "2021-01-01 12:00:00",
    "engagementType" : "ChargeableImpression"
  }],
}


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
          <h3>(here's how it works)</h3> 
        </Row>
      </Container>
    </div>

    <Transition height="0vh" from="#000000" to="#000000"></Transition>

    <div className="infoSection">
    </div>

    <Transition height="75vh" from="#000000" to="#fff"></Transition>

    <div className="infoSection">
        <h1>Squire helps you aggregate your personal data,</h1>
        <h1>in whichever ways <i>you</i> decide.</h1> 
        
        <SocialAggregation></SocialAggregation>
    </div>

    <Transition height="75vh" from="#fff" to="#fff"></Transition>

    <div className="infoSection">
      <h1>Info</h1>
    </div>

    <Transition height="75vh" from="#fff" to="#3b5998"></Transition>

    <div className="infoSection" style={{ color: 'white'}}>
      <Container>
        <Row>
          <Col>Facebook</Col>
          <Col>
            <Row>
              <img class="FacebookText" src={FacebookText} alt=""/>
              <img class="FacebookScreenshot" src={FacebookScreenshot} alt=""/> 
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    
    <Transition height="75vh" from="#3b5998" to="#00acee"></Transition>
    
    <div className="infoSection" style={{ color: 'white' }}>
      <Container>  
        <Row>
          <Col>
            <h1>Let's take a deeper look at how these companies use data to target you with ads.</h1>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h3>In response to <a href="https://gdpr-info.eu/art-15-gdpr/">new</a>&nbsp;<a href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/right-of-access/">regulation</a>, most Big Tech firms now allow their users to download the personal data collected about them.</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <img class="TwitterImage" src={WhiteTwitterLogo} alt=""/> 
            <h3 className="jsonDescription">Here's an example of how Twitter can <u>learn</u> about its users, <u>classify</u> their interests, 
            <u> determine</u> their impressionability, and <u>target</u> them with an advertisment.</h3>
            <ReadMore></ReadMore>
          </Col>
          
          <Col className="twitterJSON">
            <JSONPretty id="json-pretty" data={twitterJSON} mainStyle="color:white"></JSONPretty>
            
          </Col>
        </Row>
      </Container>
    </div>

    <Transition height="75vh" from="#00acee" to="#ffce44"></Transition>

    <div className="infoSection">
      <img class="GoogleText" src={GoogleText} alt=""/> 
    </div>

    <Transition height="75vh" from="#ffce44" to="#e47911"></Transition>

    <div className="infoSection" style={{ color: 'white' }}>
    <img class="AmazonText" src={AmazonText} alt=""/> 
    </div>

    <Transition height="75vh" from="#e47911" to="#000000"></Transition> 

    <div className="infoSection" style={{ color: 'white' }}>
      <h1>Let's get started.</h1>
    </div>

    <hr className="line"></hr>
    <div className="footer" style={{ color: 'white' }}>
      <Footer></Footer>
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