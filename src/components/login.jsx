// This file will handle the login component, this component will log a user into our firebase system
//http://localhost:8080/#/login

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { username, password } = this.state;
     firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {  //if user cannot sign in, we handle the error like this
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err)
      })
  }

// H1 COMPONENT BELOW IS JUST A VISUAL TO LET YOU KNOW WHERE YOU ARE

  render() {
    return (
      <div>
      <h1>Welcome to the <mark>LOGIN</mark> component, this component is <mark><b>NOT</b></mark> protected</h1>
        <div id="login-form">
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);