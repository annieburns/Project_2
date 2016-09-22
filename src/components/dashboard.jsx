// This will render our USER HOME (DASHBOARD) component, this will be a dummy component that will just render some text. However this route will be protected from viewing by anyone not logged in.


import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';


const Dashboard = () => {
  return (
    <div>
        <h1>Welcome to the <mark>DASHBOARD</mark> component, this component <mark><b>IS</b></mark> protected</h1>
    </div>
  );
}

export default Dashboard;



