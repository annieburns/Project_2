import React, { Component } from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import firebase from '../../firebase.config.js';
import request from 'superagent';
import Plot from './plot.jsx';


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getPlots = this.getPlots.bind(this);
  };
  componentDidMount() {
    this.getPlots()

  }

 getPlots() {
    const userId = firebase.auth().currentUser.uid;
    const url = `https://plot-63737.firebaseio.com/users/${userId}/plot.json`;
    request.get(url)
      .end((err, response) => {
        this.setState({
          plot: response.body
        })
      })
  }



   render() {
    <div id="bottom-nav">
        <Link to="/plot" id="plot">ADD A PLOT</Link>
    </div>

    if ( !this.state.plot ) {
      return (
         <div id="plot-library">
        <h2>This is your plot library!</h2>
          <div id="bottom-nav">
            <Link to="/plot" id="plot">ADD A PLOT</Link>
          </div>
        </div>
      )
    }

    const keys = Object.keys(this.state.plot);
    const plotElements = keys.map((key) => {
      return (
        <div id="plot-block">
          <div key={key}>
            <h2>{this.state.plot[key].plot}</h2>
            <h3>{this.state.plot[key].comments}</h3>
          </div>
        </div>
        )
    });

    return (
      <div id="plot-elements">
        {plotElements}
          <div id="bottom-nav">
            <Link to="/plot" id="plot">ADD A PLOT</Link>
          </div>
    </div>
    );
  }
}

export default Library;
