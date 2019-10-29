import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  color: #fff;
  background: var(--dark-color);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  align-items: center;

  span {
    color: var(--primary-hover-color);
  }

  ul {
    display: flex;
    list-style: none;
    li {
      //padding: 0.5rem 1rem;
      a {
        text-decoration: none;
        border: #fff;
        color: #ccc;
        transition: all 0.5s;
        padding: 0.75rem 0.5rem;
        margin: 0 0.25rem;
        border-radius: 5px;

        &:hover {
          //color: black;
          background: var(--primary-color);
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Fragment>
      <StyledNavbar id="id">
        <h1>
          <span>Alex</span>Gribenchenko
        </h1>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="https://github.com/samnite" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
        </ul>
      </StyledNavbar>
    </Fragment>
  );
};

export default Navbar;
