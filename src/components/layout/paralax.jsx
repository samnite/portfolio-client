import React from 'react';
import background1 from '../../img/background1.jpg';

const Paralax = () => {
  return (
    <div
      id="index-banner"
      className="parallax-container"
      style={{ height: '400px' }}
    >
      <div className="section no-pad-bot">
        <div className="container">
          <div>
            <br />
            <br />
          </div>
          <h1 className="header center blue-text text-lighten-1">Alex G.</h1>
          <div className="row center">
            <h5 className="header col s12 cyan-text text-lighten-5">
              A modern front-end developer on React
            </h5>
          </div>
          <div className="row center">
            <a
              href="http://materializecss.com/getting-started.html"
              id="download-button"
              className="btn-large waves-effect waves-light blue lighten-1"
            >
              Projects
            </a>
          </div>
          <div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="parallax">
        <img src={background1} alt="Unsplashed background img 1" />
      </div>
    </div>
  );
};

export default Paralax;
