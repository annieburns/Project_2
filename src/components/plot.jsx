import React, { Component } from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import firebase from '../../firebase.config.js';

class Plot extends Component {
  constructor(props) {
    super();
    this.state = {
      plot: props.plot || '',
      category: props.category || '',
      comments: props.comments || '',
    };
    this.handleNewPlot = this.handleNewPlot.bind(this);
    this.handlePlotSubmit = this.handlePlotSubmit.bind(this);
  }

handleNewPlot(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

handlePlotSubmit(database) {
    console.log(this.state);
    const { plot, category, comments } = this.state;
    // console.log(firebase.auth());
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId + '/plot/').push({
      plot: this.state.plot,
      category: this.state.category,
      comments: this.state.comments,
    })

  this.setState({ saved: true });
  this.setState({plot: "", category: "", comments: ""});
  }

  render() {
    return (
      <div>
        <div id="plot-form">
        <div id="content-bar">ADD A PLOT</div>
          <div>
            <input
              name="plot"
              onChange={this.handleNewPlot}
              value={this.state.plot}
              type="text"
              placeholder="plot name and address" />
          </div>
          <div>
            <input
              name="category"
              onChange={this.handleNewPlot}
              value={this.state.category}
              type="category"
              placeholder="category" />
          </div>
          <div>
            <input
            name="comments"
            onChange={this.handleNewPlot}
            value={this.state.comments}
            type="comments"
            placeholder="comments" />
          </div>
          <button
          className="btn"
          onClick={this.handlePlotSubmit}>Add PLOT to Your Library
          </button>
        </div>
        <div id="bottom-nav">
          <Link to="/library" id="library">YOUR LIBRARY</Link>
          <Link to="/about" id="about">ABOUT PLOT</Link>
          <Link to="/community" id="community">PLOT COMMUNITY *Coming Soon!</Link>
          <Link to="/dashboard" id="dashboard">YOUR DASHBOARD</Link>
      </div>
      </div>
    );
  }
}

export default Plot;



// DID NOT GET TO FINISH COMMUNITY
 // <Link to="/community" id="community">PLOT COMMUNITY</Link>



