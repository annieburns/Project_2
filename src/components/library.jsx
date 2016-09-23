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
    const userId = firebase.auth().currentUser.uid;
    const url = `https://plot-63737.firebaseio.com/users/${userID}/plot.json`;
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
        <h2> jhfiyf</h2>
      </div>
    );
}
}


export default Library;






// return (
//     <div>
//       <h1>Welcome to the <mark>Library</mark> component, this component <mark><b>IS</b></mark> protected</h1>
//       <h2>
//     </div>
//     );
//   }

// export default Library;

// get request with string interpolation
// userid same as done in plot.jsx
// This is getting all of the values in the contact object for the user with id: currenUserID

