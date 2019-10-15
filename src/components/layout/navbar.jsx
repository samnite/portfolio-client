import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const dropDown = (
    <Fragment>
      <li>
        <a href="#!">one</a>
      </li>
      <li>
        <a href="#!">two</a>
      </li>
      <li>
        <a href="#!">three</a>
      </li>
    </Fragment>
  );

  const menuItems = <Fragment></Fragment>;

  return (
    <Fragment>
      <nav className="nav-extended purple darken-4">
        <div className="nav-wrapper">
          {/*LOGO*/}
          <a
            href="#!"
            className="brand-logo blue-text text-lighten-1"
            style={{ marginLeft: '15px' }}
          >
            <FontAwesomeIcon icon={faReact} />
          </a>
          {/*Menu Button on mobile device*/}
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/*Menu Items*/}
            <li>
              <a href="#!">About</a>
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

      {/*Mobile menu Items*/}
      <ul className="sidenav" id="mobile-demo">
        {/*Menu Items*/}
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a className="dropdown-trigger" href="#" data-target="dropdown2">
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

      {/*Dropdown Items*/}
      <ul id="dropdown1" className="dropdown-content cyan-text">
        {dropDown}
      </ul>
      <ul id="dropdown2" className="dropdown-content cyan-text">
        {dropDown}
      </ul>
    </Fragment>
  );
};

export default Navbar;
