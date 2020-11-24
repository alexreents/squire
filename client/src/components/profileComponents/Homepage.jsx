import Header from "./Header";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class HomePage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      _id: PropTypes.string
    })
  };

  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    // Fetch does not send cookies. So you should add credentials: 'include'
    fetch("http://localhost:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <div>
          {!authenticated ? (
            <h1>Welcome</h1>
          ) : (
            <div>
              <h1>Success </h1>
              <h2>Name: {this.state.user.name}</h2>
              <h2>Twitter Screen Name: {this.state.user.twitterScreenName}</h2>
              <h2>Twitter ID: {this.state.user.twitterId}</h2>
              <h2>Profile Image URL: {this.state.user.twitterProfileImageUrl}</h2>
              <h2>Access Token: {this.state.user.twitterAccessToken}</h2>
              <h2>Token Secret: {this.state.user.twitterTokenSecret}</h2>
            </div>
          )}
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}
