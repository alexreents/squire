import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <div class="m-4 main">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4 font-weight-bold">Squire Capital</h1>
          <div class="row justify-content-center">
            <p class="lead col-5">
              It's time to revolutionize the development of future technology,
              and it begins with restructuring our personal data.
            </p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <h2>The Elevator Pitch</h2>
            <p>
              If we actively aggregate personal data at the individual level and
              selectively allow developers privacy-preserving access to its
              contents, our data becomes capital in the production of machine
              learning technology. Individuals get returns to their "personal
              data investments" in the form of increased access to and control
              over the emerged artificial intelligence.
            </p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="row">
                <h2>The Tech Problem</h2>
                <p class="left-col">
                  One way in which machine learning is unique is its ability to
                  replace humans. Unlike other forms of technology, AI learns
                  from <i>itself</i>. If we develop more advanced AI, few people
                  will need to work. This translates to many jobs lost (also
                  stagnat wages), while the owners of the technology earn these
                  losses for themselves.
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <h2>The Economic Problem</h2>
                <p class="right-col">
                  One explanation for wage stagnation: growth to multifactor
                  productivity have been distributed inequitably. Returns to
                  Squire Capital help readjust the balance of returns to labor
                  and returns capital by allowing every individual to benefit
                  from his or her data.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <h2 class="text-white bg-dark">
              The marginal impact of AI will exponentially increase,
            </h2>
            <h2 class="text-white bg-dark">
              but the distribution of control over its development will not.
            </h2>
          </div>
          <br />
          <div class="row">
            <div>
              <h2 class="text-dark">
                This means a small group of decision-makers will benefit
                tremendously <br />
                while the rest of us watch powerless.
              </h2>
            </div>
          </div>
          <br />
        </div>
        {/* <div class="container">
          <div class="row">
            <h2>Our Solution</h2>
            <p>
              If we actively aggregate personal data at the individual level and
              selectively allow developers privacy-preserving access to its
              contents, our data becomes capital in the production of machine
              learning technology. Individuals get returns to their "personal
              data investments" in the form of increased access to and control
              over the emerged artificial intelligence. The sphere of control
              over transformative technology should grow alongside the products
              themselves
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Landing;
