import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { animateScroll as scroll, Link } from "react-scroll";
import { Link as ReactLink, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { StyledNavbar, StyledName } from "./styled-components";
import LanguageSelector from "./language-selector";

const Navbar = () => {
  const { t } = useTranslation();
  const { isMain } = useSelector((state) => state.data);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <StyledNavbar>
      <h1>
        <ReactLink to="/">
          <StyledName>Alex</StyledName>Gribenchenko
        </ReactLink>
      </h1>
      <ul style={{ alignItems: "center" }}>
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
              {t("homeNavLink")}
            </Link>
          ) : (
            <ReactLink to="/">{t("homeNavLink")}</ReactLink>
          )}
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-nav">
            {t("aboutNavLink")}
          </NavLink>
        </li>
        <li>
          <ReactLink to="/projects" spy smooth offset={-70} duration={500}>
            {t("projectsNavLink")}
          </ReactLink>
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
      <LanguageSelector />
    </StyledNavbar>
  );
};

export default Navbar;

// TODO Fix scroll-to-top (main page have no active class)
