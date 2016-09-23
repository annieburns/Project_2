import React, { Component } from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import firebase from '../../firebase.config.js';



class Plot extends Component {
  constructor() {
    super();
    this.state = {
      plot: '',
      comments: '',
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
    const { plot, comments } = this.state;
    // console.log(firebase.auth());
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).push({
      plot: this.state.plot,
      comments: this.state.comments,
    })

  this.setState({ saved: true });
    // this.setState({plot: "", comments: ""});
  }

  render() {
    return (
      <div>
        <div id="plot-form">
        <h1>Add a PLOT.</h1>
          <div>
            <input name="plot" onChange={this.handleNewPlot} type="text" placeholder="plot" />
          </div>
          <div>
            <input name="comments" onChange={this.handleNewPlot} type="comments" placeholder="comments" />
          </div>
          <button className="btn" onClick={this.handlePlotSubmit}>Add PLOT</button>
        </div>
        <div id="bottom-nav">
          <Link to="/plot" id="plot">ADD A PLOT</Link>
          <Link to="/library" id="library">YOUR LIBRARY</Link>
          <Link to="/community" id="community">PLOT COMMUNITY</Link>
      </div>
      </div>
    );
  }
}



export default Plot;










