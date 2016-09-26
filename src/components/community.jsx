// COMMUNITY IS A PLACEHOLDER FOR NOW WHILE I FINISH CODE

import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import firebase from '../../firebase.config.js';


const Community = () => {
  return (
    <div id="coming-soon">
      <div id="content-bar">COMMUNITY *PLACEHOLDER*</div>
    <div id="bottom-nav">
      <Link to="/plot" id="plot2">ADD A PLOT</Link>
      <Link to="/library" id="library2">YOUR LIBRARY</Link>
      <Link to="/about" id="about2">ABOUT PLOT</Link>
      <Link to="/dashboard" id="dashboard3">YOUR DASHBOARD</Link>
      </div>
    </div>
  );
}


export default Community;



// import React, { Component } from 'react';
// import { withRouter } from 'react-router';
// import firebase from '../../firebase.config.js';
// import request from 'superagent';
// import Plot from './plot.jsx';
// import PlotItem from './PlotItem.jsx';
// import Library from './library.jsx';


// const propTypes = {
//     plot: React.PropTypes.string,
//     category: React.PropTypes.string,
//     comments: React.PropTypes.string,
//     id: React.PropTypes.string,
//     onClick: React.PropTypes.func,
//   };

// class Community extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//     this.getAllPlots = this.getAllPlots.bind(this);
//  };
//  }
// componentDidMount() {
//     this.getAllPlots()
//   }

//  getAllPlots(id) {
//     const url = firebase.database().ref('https://plot-63737.firebaseio.com.json');
//     request.get(url).then(() => {
//       this.getPlots()
//   })
//  })
// }

//   render() {
//     console.log(typeof this.props.id);
//     return (
//         <div id="plot-block">
//           <div>
//             <h1>{this.props.plot}</h1>
//             <h2>{this.props.category}</h2>
//             <h3>{this.props.comments}</h3>
//           </div>
//         </div>
//     );
//    }

// Community.propTypes = propTypes;

// export default Community;
