// This will render our USER HOME (DASHBOARD) component, this will be a dummy component that will just render some text. However this route will be protected from viewing by anyone not logged in.
// what the user needs to see after they click each link
// create routes specifically to render those components

// THINK ABOUT LINKS FIRST


import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import firebase from '../../firebase.config.js';


const Dashboard = () => {
  return (
    <div id="dashboard">
      <div id="content-bar">Home Dashboard</div>
    <div id="bottom-nav">
      <Link to="/plot" id="plot2">ADD A PLOT</Link>
      <Link to="/library" id="library2">YOUR LIBRARY</Link>
      <Link to="/about" id="about2">ABOUT PLOT</Link>
      <Link to="/community" id="community3">PLOT COMMUNITY</Link>
      </div>
    </div>
  );
}

export default Dashboard;



