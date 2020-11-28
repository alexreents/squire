import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LandNavbar from "./LandNavbar";
import { AnimatedBg, Transition } from 'scroll-background';
import SocialAggregation from "./SocialAggregation";
import WhiteTwitterLogo from "./images/white-twitter.png"
import JSONPretty from 'react-json-pretty';
import FacebookScreenshot from "./images/facebook-screenshot.png"
import GoogleTextBlack from "./images/google-text-black.png";
import TikTokText from "./images/tiktok-text.png";
import FacebookText from "./images/facebook-text.png";
import YoutubeText from "./images/youtube-text.png";
import SpotifyText from "./images/spotify-text.png";
import ReadMore from "./ReadMore";
import Footer from "./Footer";
import ArrowCurveUp from "./images/arrow-curve-up.png";
import Typing from 'react-typing-animation';

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

const Landing = () => (
  
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

    <div className="infoSection" id="black-text">
        <h2>Squire helps you aggregate your personal data,</h2>
        <h2>in whichever ways <i>you</i> decide.</h2> 
        
        <SocialAggregation></SocialAggregation>
    </div>

    <Transition height="75vh" from="#fff" to="#fff"></Transition>

    <div className="infoSection" id="black-text">
      <h2>The result is an incredibly <u>powerful</u> repository of information about yourself.</h2>
      <br></br>
      <h2><u>You</u> control this data and can do with it what you like.</h2>
    </div>

    <Transition height="75vh" from="#fff" to="#3b5998"></Transition>

    <div className="infoSection">
      <Container>
        <Row>
          <Col>
            <Row id="white-text">
              <h2>Only a handful of Big Tech firms have extensive personal data aggregation.
                This allows these few companies to use that data however <u>they</u> choose.  
              </h2>
              <br></br>
              <h2>Typically, that purpose is for marketing. Effective advertisements are highly profitable, so 
                companies like Facebook, Google, and Twitter analyze your <u style={{color: 'white'}}>behavior</u> in various ways.
              </h2>
              <img className="facebookArrow" src={ArrowCurveUp} alt=""/>
            </Row>
          </Col>
          <Col>
              <div className="facebook-img">
                  <img className="FacebookText" src={FacebookText} alt=""/>
                  <img className="FacebookScreenshot" src={FacebookScreenshot} alt=""/> 
              </div>
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
            <h3 className="jsonDescription">To the right is an example of how Twitter can <u>learn</u> about its users, <u>classify</u> their interests, 
            <u> determine</u> their impressionability, and <u>target</u> them with an advertisment.</h3>
            <ReadMore></ReadMore>
          </Col>
          
          <Col className="twitterJSON">
            <JSONPretty id="json-pretty" data={twitterJSON} mainStyle="color:white"></JSONPretty>
            
          </Col>
        </Row>
      </Container>
    </div>


    <Transition height="75vh" from="#00acee" to="#ff6961"></Transition>

    <div className="infoSection">
      <Container>
        <Row>
          <Col sm={3}>
            <Row className="freemium">
              <img class="YoutubeText" src={YoutubeText} alt=""/>
            </Row>
            <Row className="freemium">
              <img class="TikTokText" src={TikTokText} alt=""/>  
            </Row>
            <Row className="freemium">
              <img class="SpotifyText" src={SpotifyText} alt=""/>  
            </Row>
          </Col>
          <Col sm={9} id="business-models">
            <h1 id="free-quote">"If you are not paying for it, you’re not the customer; you’re the product being sold."</h1>
            <h4>- Re-tweeted by Tim O'Reilly in 2010</h4>
            <p>These companies aren't evil, and their services offer real benefits to our world. 
              However, the advertising and freemium business models skew their incentives. Instead of building products 
              that are good for users or truly enhance our lives, these companies are more motivated to keep us hooked to their
              platforms and continuously presented with advertisements. The YouTube autoplay feature, Snapchat streaks, and 
              algorithms that promote emotion-evoking content over substantive information are all design choices to keep us 
              digitally engaged. In an effort to get us to click on more ads, these companies have inadvertently built 
              addictive technologies, widespread surveillance systems, and havens for proliferating disinformation.</p>
          </Col>
        </Row>
        
      </Container>

    </div>

    <Transition height="75vh" from="#ff6961" to="#ffce44"></Transition>

    <div className="innovationSection">
      <Container>
        <Row id="google-block">
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
          <Col sm={8} id="invest">
              <h1>Invest in your data,</h1>
              <h1>Invest in technology.</h1>
          </Col>
          
        </Row>
      </Container>
      
    </div>

    <Transition height="75vh" from="#ffce44" to="#000000"></Transition> 

    <div className="infoSection" style={{ color: 'white' }}>
      <h1>Let's get started.</h1>
    </div>

    <hr className="line"></hr>
    <div className="footer" style={{ color: 'white' }}>
      <Footer></Footer>
    </div>


  </AnimatedBg>

)

export default Landing;


