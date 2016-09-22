// We will be putting our routes in this file. This will become a dummy component that just renders our Router and tells our app how to navigate.
// YOU ADD A COMPONENT HERE FIRST BEFORE BUILDING THE FILE

//THIS IS OUR ROUTER
import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import Main from '../components/main.jsx';  //first step, going down in order building pieces
import About from '../components/about.jsx';
import Register from '../components/register.jsx';
import Login from '../components/login.jsx';
import Dashboard from '../components/dashboard.jsx';
import requireAuth from '../utils/auth.js';
import Plot from '../components/plot.jsx';
import Library from '../components/library.jsx';
import Community from '../components/community.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={About}/>
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
        <Route path="plot" component={Plot} />
        <Route path="library" component={Library} />
        <Route path="community" component={Community} />
      </Route>
    </Router>
  );
}

export default Routes;
