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

    this.setState({plot: "", comments: ""});
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
      </div>
    );
  }
}

export default Plot;























// DOESNT WORK
// const propTypes = {
//   id: React.PropTypes.string,
//   plot: React.PropTypes.string,
//   comments: React.PropTypes.string,
//   handlePublish: React.PropTypes.func,
// };

// class Plot extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.isSaved = this.isSaved.bind(this);
//     this.handlePublish = this.handlePublish.bind(this);
//   }

//  httpUpdatePlot({ id, plot, comments }) {
//     request.patch(url)
//            .send({ plot, comments })
//            .then(() => {
//              this.httpGetPlots();
//            });
//   }
//   httpPublishPlot({ id, plot, comments }) {
//     request.plot(url)
//            .send({ plot, comments })
//            .then(() => {
//              this.httpGetPlots();
//            });
//   }

//    handlePublish({ id, plot, comments }) {
//     if (id) {
//       this.httpUpdatePlot({ id, plot, comments });
//     } else {
//       this.httpPublishPlot({ id, plot, comments });
//     }
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.handlePublish({
//       id: this.props.id,
//       comments: this.state.comments,
//       plot: this.state.plot,
//     });
//     this.setState({ saved: true });
//   }

//   isSaved() {
//     return this.props.comments === this.state.comments &&
//           this.props.plot === this.state.plot;
//   }
//  render() {
//     let activeButtons;
//     if (this.isSaved()) {
//       activeButtons = (
//         <div className="active-buttons"></div>
//       );
//     }
//     return (
//       <div className={this.isSaved() ? 'saved' : 'not-saved'} >
//         <form className="plot-display" onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             comments="comments"
//             value={this.state.comments}
//             onChange={this.handleEditOfcomments}
//           />
//           <input
//             type="text"
//             comments="plot"
//             value={this.state.plot}
//             onChange={this.handleEditOfplot}
//           />
//           <input
//             type="submit"
//             value="SAVE"
//             className="hidden"
//           />
//         </form>
//         {activeButtons}
//       </div>
//     );
//   }
// }

// Plot.propTypes = propTypes;

// export default Plot;


/////////////
// FIRST BASIC SETUP

// const Plot = () => {
//   return (
//     <div>
//       <h1>Welcome to the <mark>PLOT</mark> component, this component <mark><b>IS</b></mark> protected</h1>
//     </div>
//     );
//   }

// export default Plot;

/////////
