import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";
import { Link as ReactLink, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { connect } from "react-redux";

const StyledNavbar = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  margin: 0;
  color: #fff;
  background: var(--dark-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  align-items: center;

  a {
    color: #fff;
  }

  span {
    color: var(--primary-hover-color) !important;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      a {
        cursor: pointer;
        text-decoration: none;
        border: #fff;
        color: #ccc;
        transition: all 0.5s;
        padding: 0.75rem 0.5rem;
        margin: 0 0.25rem;
        border-radius: 5px;

        &:hover {
          background: var(--primary-color);
        }
      }
    }
  }

  .active-nav {
    background: var(--primary-color);
  }

  @media (max-width: 768px) {
    justify-content: center;
    ul {
      margin-top: 0.5rem;
    }
  }
`;

const Navbar = ({ data: { isMain } }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <StyledNavbar>
        <h1>
          <ReactLink to="/">
            <span>Alex</span>Gribenchenko
          </ReactLink>
        </h1>
        <ul>
          <li>
            {isMain ? (
              <Link
                to=""
                activeClass="active-nav"
                spy
                smooth
                offset={-70}
                duration={500}
                onClick={scrollToTop}
              >
                Home
              </Link>
            ) : (
              <ReactLink to="/">Home</ReactLink>
            )}
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-nav">
              About
            </NavLink>
          </li>
          <li>
            {isMain ? (
              <Link to="Projects" spy smooth offset={-70} duration={500}>
                Projects
              </Link>
            ) : (
              <HashLink to="/#Projects">Projects</HashLink>
            )}
          </li>
          <li>
            <a
              href="https://github.com/samnite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
        </ul>
      </StyledNavbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Navbar);

// TODO Fix scroll-to-top (main page have no active class)
