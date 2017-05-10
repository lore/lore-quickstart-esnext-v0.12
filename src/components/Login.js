import React, { Component, PropTypes } from 'react';
import Auth0Lock from 'auth0-lock';

class Login extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);

    // Bind your custom methods so you can access the expected 'this'
    this.getLock = this.getLock.bind(this);
    this.onAuthentication = this.onAuthentication.bind(this);
    this.showLogin = this.showLogin.bind(this);
  }

  componentDidMount() {
    this.lock = this.getLock();
    this.showLogin();
  }

  getLock(){
    var clientId = lore.config.auth0.clientId;
    var domain = lore.config.auth0.domain;

    return new Auth0Lock(clientId, domain, {
      auth: {
        redirect: false,
        sso: false
      },
      languageDictionary: {
        title: "Lore Quickstart"
      }
    });
  }

  onAuthentication(authResult) {
    // save user token to localStorage
  }

  showLogin(){
    this.lock.on('authenticated', this.onAuthentication);
    this.lock.show();
  }

  render() {
    return (
      <div/>
    );
  }

}

export default Login;