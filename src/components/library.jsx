import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';


const Library = () => {
  return (
    <div>
      <h1>Welcome to the <mark>Library</mark> component, this component <mark><b>IS</b></mark> protected</h1>
    </div>
    );
  }

export default Library;
