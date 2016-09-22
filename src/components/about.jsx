// This will render our home component, this will be a dummy component that will just render some text.
import React from 'react';
// We are not using a COMPONENT IN ABOVE because its a dummy component


const About = () => {
  return (
    <div>
      <div id="about-intro">
        <h1>Where do you recommend I go?</h1>
        <h2>(Said every friend AND relative who ever came to town.)</h2>
      </div>
      <div id="about-para">
        <p>PLOT is a sharable app that allows users to save a place they’ve visited in just a few clicks.  That place can be simply categorized into a library of favorite ‘plots’ based on a location.</p>
        <p>So next time Aunt Margaret or your college roommate comes to town and asks that damn question… you just share your PLOT.  They’ll be able to see your recommendation for restaurants, bars, museums, galleries, and more.  PLOT your favorite places throughout the year—and then forget about them, because the app already saved that location, review and details, and organized it in your library.</p>
      </div>
        <ul>
          <li>Restaurants</li>
          <li>Bars</li>
          <li>Galleries & Museums</li>
          <li>Events</li>
          <li>Stores</li>
          <li>Hidden Gems</li>
        </ul>
    </div>
  );
}

export default About;

