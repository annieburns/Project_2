import React, { Component } from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import firebase from '../../firebase.config.js';
import request from 'superagent';
import Plot from './plot.jsx';
import PlotItem from './PlotItem.jsx';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getPlots = this.getPlots.bind(this);
    this.httpDeletePlot = this.httpDeletePlot.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
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

httpDeletePlot(plotId) {
    console.log("httpDeletePlot: ", plotId);
    const userId = firebase.auth().currentUser.uid;
    console.log("User Id: ", userId);
    const req = firebase.database().ref(`/users/${userId}/plot/${plotId}`);
    // console.log(req);
    req.remove().then(() => {
      this.getPlots()
      });
    }

handleDeleteClick(e) {
    e.preventDefault();
    // console.log(e.target.value)
    this.httpDeletePlot(e.target.value);
    // console.log(e.target);
    // this.setState.httpDeletePlot(e.target.value);
  }


render() {
    if ( !this.state.plot ) {
      return (
        <div>
         <div id="content-bar">PLOT LIBRARY </div>
         <div id="plot-library">
         <div id="bottom-nav">
            <Link to="/plot" id="plot">ADD A PLOT</Link>
          </div>
      </div>
    </div>
   );
  }
    const keys = Object.keys(this.state.plot);
    const plotElements = keys.map((key) => {
        return (
          <PlotItem
            key={key}
            plot={this.state.plot[key].plot}
            comments={this.state.plot[key].comments}
            id={key}
            onClick={this.handleDeleteClick}
          />
        )
    });
    {/*
        <div key={key} id="plot-block">
          <div>
            <h2>{this.state.plot[key].plot}</h2>
            <h3>{this.state.plot[key].comments}</h3>
            <button
              value={key}
              onClick={this.handleDeleteClick}
              >Delete
            </button>
          </div>
        </div>
      */}
    return (
      <div>
        <div id="content-bar">PLOT LIBRARY </div>
        <div id="plot-elements">
          {plotElements}
        </div>
        <div id="bottom-nav">
          <Link to="/plot" id="plot">ADD A PLOT</Link>
        </div>
      </div>
    );
  }
}

export default Library;




//deleted "plot library id" becuase thought it might be useless, here it is just in case
// render() {
//     if ( !this.state.plot ) {
//       return (
//         <div>
//          <div id="content-bar">PLOT LIBRARY </div>
//          <div id="plot-library">
//          <div id="bottom-nav">
//             <Link to="/plot" id="plot">ADD A PLOT</Link>
//           </div>
//       </div>
//     </div>
//    );
//   }
