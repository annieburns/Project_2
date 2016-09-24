import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';
import request from 'superagent';
import Plot from './plot.jsx';


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };
  componentDidMount() {
    this.getPlots()
  }

 getPlots() {
    const userId = firebase.auth().currentUser;
    const url = `https://plot-63737.firebaseio.com/users/${userId}/plot.json`;
    request.get(url)
      .end((err, response) => {
        this.setState({
          plot: response.body
        })
      })
  }

   render() {
    return (
      <div id="plot-library">
        <h2> {this.props.state} </h2>
      </div>
    );
  }
}

export default Library;

