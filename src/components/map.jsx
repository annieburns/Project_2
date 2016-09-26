// an attempt but doesnt work
// source: npm install --save google-map-react



// import React, { Component } from 'react'
// import GooglePlacesSuggest from 'react-google-map'
// import { withRouter, Link, hashHistory } from 'react-router';
// import firebase from '../../firebase.config.js';


// class Map extends Component {
//   super();
//     this.state = {
//     search: props.search || '',
//     selectedCoordinate: null,
// };
// };

//   handleSearchChange = (e) => {
//     this.setState({ search: e.target.value })
//   };

//   handleSelectSuggest = (suggestName, coordinate) => {
//     this.setState({ search: suggestName, selectedCoordinate: coordinate })
//   };

// render() {
//   const { search } = this.state
//     return (
//         <GooglePlacesSuggest onSelectSuggest={ this.handleSelectSuggest } search={ search }>
//           <input
//             type="text"
//             value={ search }
//             placeholder="Search a location"
//             onChange={ this.handleSearchChange }
//           />
//         </GooglePlacesSuggest>
//     );
//   }


// export default Map;
