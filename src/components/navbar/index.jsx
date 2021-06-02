import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledNavbar, StyledName } from "./styled-components";
import LanguageSelector from "./language-selector";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <StyledNavbar>
      <h1>
        <NavLink to="/">
          <StyledName>Alex</StyledName>Gribenchenko
        </NavLink>
      </h1>
      <ul style={{ alignItems: "center" }}>
        <li>
          <NavLink to="/" activeClassName="active-nav" exact>
            {t("homeNavLink")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active-nav" exact>
            {t("projectsNavLink")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-nav" exact>
            {t("aboutNavLink")}
          </NavLink>
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
