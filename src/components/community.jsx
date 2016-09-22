import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';


const Community = () => {
  return (
    <div>
      <h1>Welcome to the <mark>Community</mark> component, this component <mark><b>IS</b></mark> protected</h1>
    </div>
    );
  }

export default Community;
