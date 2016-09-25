return (
        <PlotLibrary
          plot={this.state.plot[key].plot}
          comments={this.state.plot[key].comments}
          handleDelete={this.props.handleDelete}
        />

        //instead of
         <div id="plot-block">
          <div key={key}>
            <h2>{this.state.plot[key].plot}</h2>
            <h3>{this.state.plot[key].comments}</h3>
            <div className="delete-button">
              <button onClick={this.state.handleDelete} >Delete</button>
            </div>
          </div>
        </div>
      </div>
        )
    });

///////
import React, { Component } from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import firebase from '../../firebase.config.js';
import request from 'superagent';
import Plot from './plot.jsx';

// const propTypes = {
//   handleDelete: React.PropTypes.func,
// };

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getPlots = this.getPlots.bind(this);
    this.deletePlot = this.deletePlot.bind(this);
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
 deletePlot(id) {
    const url = `https://plot-63737.firebaseio.com/users/${userId}/plot.json`;
    request.del(url)
           .then(() => {
             this.getPlots();
  });
}

render() {
    if ( !this.state.plot ) {
      return (
        <div>
         <div id="content-bar">PLOT LIBRARY></div>
         <div id="plot-library">
         <div id="bottom-nav">
            <Link to="/plot" id="plot">ADD A PLOT</Link>
          </div>
      </div>
    </div>
      )
    }

    const keys = Object.keys(this.state.plot);
    const plotElements = keys.map((key) => {
      return (
        <div>
         <div id="content-bar">PLOT LIBRARY</div>


       <div id="plot-block">
          <div key={key}>
            <h2>{this.state.plot[key].plot}</h2>
            <h3>{this.state.plot[key].comments}</h3>
            <div className="delete-button">
              <button onClick={this.state.plot[key].deletePlot} >Delete</button>
            </div>
          </div>
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
