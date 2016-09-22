// We will be using this file to set up the configuration for our firebase DB, this is going to be using the NPM firebase package
// see evernote screenshots on how to set this up, this is where your API link connects with below code from firebase

const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyCpbgRTkZWOMORpJWG0gVG231rSldPIMgE",
    authDomain: "plot-63737.firebaseapp.com",
    databaseURL: "https://plot-63737.firebaseio.com",
    storageBucket: "plot-63737.appspot.com",
    messagingSenderId: "486471327884"
  };

firebase.initializeApp(config);

module.exports = firebase;
