import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faSass
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <Fragment>
      <div>
        <h3 className="center-align">My skills</h3>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center blue-text">
              <div className="material-icons">
                <FontAwesomeIcon icon={faReact} />
              </div>
            </h2>
            <h5 className="center">React</h5>

            <p className="light">
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers
              and companies. React can be used as a base in the development of
              single-page or mobile applications, as it is optimal for fetching
              rapidly changing data that needs to be recorded.
            </p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center orange-text">
              <div className="material-icons">
                <FontAwesomeIcon icon={faHtml5} />
              </div>
            </h2>
            <h5 className="center">HTML5</h5>

            <p className="light">
              HTML5 is a software solution stack that defines the properties and
              behaviors of web page content by implementing a markup based
              pattern to it. HTML5 is the fifth and current major version of
              HTML, and subsumes XHTML.
            </p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center indigo-text">
              <div className="material-icons">
                <FontAwesomeIcon icon={faCss3} />
              </div>
            </h2>
            <h5 className="center">CSS3</h5>

            <p className="light">
              CSS3 is the latest evolution of the Cascading Style Sheets
              language and aims at extending CSS2.1. It brings a lot of
              long-awaited novelties, like rounded corners, shadows, gradients,
              transitions or animations, as well as new layouts like
              multi-columns, flexible box or grid layouts.
            </p>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: '0px' }}>
        <div className="col s12 m6">
          <div className="icon-block">
            <h2 className="center yellow-text">
              <div className="material-icons">
                <FontAwesomeIcon icon={faJs} />
              </div>
            </h2>
            <h5 className="center">JavaScript</h5>

            <p className="light">
              JavaScript, often abbreviated as JS, is a high-level, interpreted
              scripting language that conforms to the ECMAScript specification.
              JavaScript has curly-bracket syntax, dynamic typing,
              prototype-based object-orientation, and first-class functions.
            </p>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="icon-block">
            <h2 className="center pink-text">
              <div className="material-icons">
                <FontAwesomeIcon icon={faSass} />
              </div>
            </h2>
            <h5 className="center">Sass</h5>

            <p className="light">
              Sass is a style sheet language initially designed by Hampton
              Catlin and developed by Natalie Weizenbaum. After its initial
              versions, Weizenbaum and Chris Eppstein have continued to extend
              Sass with SassScript, a simple scripting language used in Sass
              files.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
