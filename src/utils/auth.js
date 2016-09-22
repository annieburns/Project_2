// We will be using this file to write a utility function, which is reusable across our application if need be, we can also call this a helper. This utility function will check to see if our user is logged in and redirect if the user is not logged in


// LETS CHECK TO SEE IF THE CURRENT USER IFIS EVEN AVAILABLE
//IF CURRENT USER IS NULL, PLEASE SEND ME BACK TO LOGIN PAGE

//THIS METHOD WILL LOOK THE SAME EVERY TIME, OKAY TO COPY AND PASTE!!!!!

//READ THE EACT ROUTER DOCS TOP TO BOTTOM
//THE FIREBASE.AUTH WAS IN FIREBASE DOCS

import React, { Component } from 'react';
import firebase from '../../firebase.config.js';

function requireAuth(nextState, replace) {
  if(firebase.auth().currentUser === null) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

module.exports = requireAuth;
