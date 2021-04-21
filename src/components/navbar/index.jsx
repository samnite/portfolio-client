import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledNavbar, StyledName } from "./styled-components";
import LanguageSelector from "./language-selector";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <StyledNavbar>
      <h1>
        <Link to="/">
          <StyledName>Alex</StyledName>Gribenchenko
        </Link>
      </h1>
      <ul style={{ alignItems: "center" }}>
        <li>
          <Link to="/">{t("homeNavLink")}</Link>
        </li>
        <li>
          <Link to="/projects" spy smooth offset={-70} duration={500}>
            {t("projectsNavLink")}
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active-nav">
            {t("aboutNavLink")}
          </Link>
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
