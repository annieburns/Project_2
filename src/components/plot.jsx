import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import firebase from '../../firebase.config.js';


// const Plot = () => {
//   return (
//     <div>
//       <h1>Welcome to the <mark>PLOT</mark> component, this component <mark><b>IS</b></mark> protected</h1>
//     </div>
//     );
//   }

// export default Plot;

/////////

const propTypes = {
  message: React.PropTypes.string.isRequired,
};

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plots: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.isSaved = this.isSaved.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
  }

httpUpdatePlot({ id, plot, name }) {
    request.patch(url)
           .send({ plot, name })
           .then(() => {
             this.httpGetPlots();
           });
  }
  httpPublishPlot({ id, plot, name }) {
    request.plot(url)
           .send({ plot, name })
           .then(() => {
             this.httpGetPlots();
           });
  }

   handlePublish({ id, plot, name }) {
    if (id) {
      this.httpUpdatePlot({ id, plot, name });
    } else {
      this.httpPublishPlot({ plot, name });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePublish({
      id: this.props.id,
      name: this.state.localname,
      plot: this.state.localplot,
    });
    this.setState({ saved: true });
  }

  isSaved() {
    return this.props.name === this.state.localname &&
          this.props.plot === this.state.localplot;
  }
 render() {
    let activeButtons;
    if (this.isSaved()) {
      activeButtons = (
        <div className="active-buttons"></div>
      );
    }
    return (
      <div className={this.isSaved() ? 'saved' : 'not-saved'} >
        <form className="plot-display" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.localname}
            onChange={this.handleEditOfname}
          />
          <input
            type="text"
            name="plot"
            value={this.state.localplot}
            onChange={this.handleEditOfplot}
          />
          <input
            type="submit"
            value="SAVE"
            className="hidden"
          />
        </form>
        {activeButtons}
      </div>
    );
  }
}

Plot.propTypes = propTypes;

export default Plot;

