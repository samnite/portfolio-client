import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="nav-extended purple accent-4">
        <div className="nav-wrapper">
          <a
            href="#"
            className="brand-logo blue-text text-lighten-1"
            style={{ marginLeft: '15px' }}
          >
            <FontAwesomeIcon icon={faReact} /> Alex G.
          </a>

          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a className="dropdown-trigger" href="#" data-target="dropdown1">
                Projects<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/samnite"
                target="_blank"
                className="material-icons black-text"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a className="dropdown-trigger" href="#" data-target="dropdown1">
            Projects<i className="material-icons right">arrow_drop_down</i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/samnite"
            target="_blank"
            className="black-text"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub profile
          </a>
        </li>
      </ul>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
