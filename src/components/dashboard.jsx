// This will render our USER HOME (DASHBOARD) component, this will be a dummy component that will just render some text. However this route will be protected from viewing by anyone not logged in.


import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';


const Dashboard = () => {
  return (
    <div id="dash-content">
        <h1>Home Dashboard</h1>
    </div>
  );
}

export default Dashboard;



