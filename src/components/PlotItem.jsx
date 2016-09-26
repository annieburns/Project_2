import React from 'react';

const propTypes = {
    plot: React.PropTypes.string,
    category: React.PropTypes.string,
    comments: React.PropTypes.string,
    id: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

class PlotItem extends React.Component {
  render() {
    console.log(typeof this.props.id);
    return (
        <div id="plot-block">
          <div>
            <h1>{this.props.plot}</h1>
            <h2>{this.props.category}</h2>
            <h3>{this.props.comments}</h3>
            <button
              value={this.props.id}
              onClick={this.props.onClick}
              >Delete
            </button>
          </div>
        </div>
    )
  }
}

PlotItem.propTypes = propTypes;

export default PlotItem;


//THIS FILE SETS UP EVERYTHING YOU NEED TO RENDER IN THE LIBRARY, MAKES IT CLEANER
