import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import SqNavbar from "../layout/SqNavbar";
import BoxSDK from "box-node-sdk";

function getClient() {
  var sdk = new BoxSDK({
    clientID: "6fe38znudmqkh7qjzcewhhh84972jrq1",
    clientSecret: "jZDkMhcbfZsvd77iqpKHqwRadCigRe9h",
    appAuth: {
      publicKeyID: "7e6v67i5",
      privateKey:
        "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIMz5ueijdu9ECAggA\nMBQGCCqGSIb3DQMHBAiOYDsbGoGP9gSCBMieZVM/7I2Kw6Lp0QCikl3Yn+U48ACN\naFP9OUU7aaPmLqKwYcYJLbL7he3pSnyw/CIXs+UENK5IntF3v3gXh4ES+vyL55fg\n4G5s/jyVI3f69IKfR2EJ3nBekHy2Y2O8SX2m/Btv7hMvdNZU0fnjhhLtc5a85218\n6+Az1laVEX1f9t2kF0VCbncalOnbiKBQi0zAE2+pVWFWu4NYoI/sI7nGUMKqmEF2\n9FYH4tWz5/ztxcm25glaWG8NXyp2wjGWNUVkVIxNk1iQuwwuANB8D9xg6hSfSKfq\nGyO5ZOF1Mdv9GHr9WJeJZ142DooRbfcwUKG/gLhhr+esW1zlQBDyLcrhH3Ace3j5\nzLvEB03ooFPJYvefn8KkxK9YB13fSswIdiiW5vI41wlASiQV0IYFX7qqFd4K1CVm\n4Y/6lMuos/+/xsOP269vCfQS2SznA05UYoMPGSuXFb1zBJ34kS8Pw03lsYXyDOup\nsQtFELiX5+2gdORXwZyHjGOfN7LRWU4PB/3UmtZNLeLUTUyKbADuH7WKKrKdLe7+\n4SOdd05pdT9WlQ+bXyy/KFE4EWtkOiIgRwreGEAd+FzrUh3ZA68Dg71FzB4bY0Ig\nBX7em7rrILcMmH60tTlTHTEvwdVB71i8nzFHueMuj+yIQDuPlNzgVSjgUNJBWbd0\nPyo/RNzO62fnC+/nPe7IekNtiFiw2IztVP8ZxKyuJqOdyoCLi6MlzSLsP4GzJ9j+\noGEAPQfeusoVcBKXw9IMyrxAx++sbY4eWj7Y78DpEKTMCOMUT9EFQZqYUaySNB1o\nFrhlNJ+dEkU3aFP+UoKsz1qeSaULYt9zTPd6r1moAWK1G0hqa1jhLimgXHUYgl0k\nlG1hDLhSN4bknPYOtO4pSBD/hqJvv4eQlisQLK0QAelbev8bxjK5Hq6a24cPDmQ+\nEXmdeiY6D+SMS7VoH+dgPTWg0OL6cL2OzTgx177ijUaV8GpxXh/uSoXqd4/fUsD3\nOsOnFKb5cMu/NCtn5JNX5dPvo+DEVIzoAgKq6gfwONojjFt6xJs/+1Umj6M/Fvtc\nbdJ2Z5SUYOWHy204EzjMWTxfr0Sc5/ZSa0wSncTxBvKQE/j1LGBfxXijcpC5ADhj\njfhizXoEwXbfNqzTH64cbhpUJplWOeA4cyAg+eZl0SPxcKYFqKE8ZeOvhTG9XpLH\nHMq2UddkOyhH+xyrH2u2rTwBo78xiHzbDaiPd/2In2N5ond/Rpa1ytYGFXXLo++9\nzZnt5EAWCikw1mbWUa09UFxiqRBzzJ/XbJqo4z7wlJAcAORz5ozaYmjL7YpDoAip\n9tjpzFe7sbT1lkzcf9OZtGCvbMjbvuM8Yy92WTfPku+RrvuNZhqs5o+HkFi5B8yU\nrzslhcAWjUvDoOM/jXZKQ+J+BTQt/X4vfzqNbZpEh8kekz4xkxALazipdJKOF+di\nO9+YmyN26QPw0qi4SRXtGXbTlDGEha7cssl1MrwrUulM0zXANjuwmwgYfcojOolb\nFIEKEZ6nAKgYQjZYkvWIpU45cN6cWpRlAaUq2Z7yg2ELFt0JxOOTc63Q+XBf9EDm\n0LGLQ38e0QJrNL0JmHQOc5btX7QedHAnoc/01k0ShsNe2cmVbf7xLXsR21F2CmOq\n1dE=\n-----END ENCRYPTED PRIVATE KEY-----\n",
      passphrase: "e649baa0808132dc20951900f599b9a0",
      keyID: "7e6v67i5",
    },
  });

  // Get the service account client, used to create and manage app user accounts
  var client = sdk.getAppAuthClient("enterprise", "732321557");

  client.enterprise.addUser(
    'eddard@winterfell.example.com',
    'Ned Stark',
    {
      role: client.enterprise.userRoles.USER,
      address: '555 Box Lane',
      status: client.enterprise.userStatuses.ACTIVE
    })
    .then(user => {
      return user.id
      /* user -> {
        type: 'user',
        id: '44444',
        name: 'Ned Stark',
        login: 'eddard@winterfell.example.com',
        created_at: '2012-11-15T16:34:28-08:00',
        modified_at: '2012-11-15T16:34:29-08:00',
        role: 'coadmin',
        language: 'en',
        timezone: 'America/Los_Angeles',
        space_amount: 5368709120,
        space_used: 0,
        max_upload_size: 2147483648,
        status: 'active',
        job_title: '',
        phone: '',
        address: '555 Box Lane',
        avatar_url: 'https://www.box.com/api/avatar/large/deprecated' }
          */
    });

  return "ERROR";
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      boxID: "",
      errors: {},
    };
      
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    getClient();
    
    this.props.registerUser(newUser, this.props.history);

  };

  render() {
    const { errors } = this.state;

    return (
      <div className="main">
        <SqNavbar></SqNavbar>
        <div
          className="row"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="col-6 offset-3"
            style={{ padding: "2rem", border: "solid lightgray 1px" }}
          >
            <Link to="/" className="btn-flat waves-effect link">
              <i className="material-icons left link">keyboard_backspace</i>{" "}
              Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account?{" "}
                <Link className="link" to="/login">
                  Log in
                </Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "100%",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable white accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
