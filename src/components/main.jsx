// This will be our Main component, it will render all of the child components, it will also know if the user is logged in by saving it to state.

import React, { Component } from 'react';
import {Link} from 'react-router';
import firebase from '../../firebase.config.js';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
  }

// BELOW IS PURELY A PROGRAMATIC FUNCTION (COMPONENT WILL MOUNT)
// SAYING GET THE CURRRENT USER AND GIVE IT BACK TO ME, IF THERE IS NO USER IT WILL BE NULL
// THIS WILL TRIGGER ANYTIME THE USER LOGS IN OR OUT
// THE TIME OUT JUST PUTS A SLIGHT PAUSE INSTEAD OF AN IMMEDIATE PAGE REFRESH WHICH COULD MAKE THE USER A NULL
// TRIGGER THE FUNCTION WHEN SOME LOGS IN OR OUT, THE AUTH STATE HAS CHANGED
componentWillMount() {
  setTimeout(() => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loggedIn: (user !== null),
      });
    });
  }, 200);
}

// THE SECOND SIGN OUT IS A FIREBASE AUTH FUNCTION
// firebase.auth().signOut() THE REASON IT IS SPLIT IS BECUASE IT IS A "CHAIN WITH ." SO BEST PRACTICE IS TO SPLIT THE CHAIN ONTO LINES

signOut() {
  firebase.auth()
    .signOut()
    .then(() => {
      console.log('user signed out');
  });
}

// this.state.loggedIn is false right out of the gate so we use !
// if the user is not logged in, please return me return this div, ELSE please return to me a sign out DIV
loggedInLinks() {
  if(!this.state.loggedIn) {
    return (
      <div>
        <div id="login">
          <Link to="/login" id="login">Login</Link>
        </div>
        <div id="register">
          <Link to="/register" id="register">Register</Link>
       </div>
      </div>
    );
  } else {
    return (
      <div id="sign-out">
        <Link to="/" onClick={this.signOut}>Sign Out </Link>
      </div>
    );
  }
}

  render() {
    return (
      <div>
        <div id="main-nav">
          <h1>PLOT</h1>
          {
            this.loggedInLinks()
          }
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
