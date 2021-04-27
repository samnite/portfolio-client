import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { StyledCardLinks, StyledProjectCard } from "./styled-components";

const ProjectItem = ({ title, img, id, link, webLink, gitLink }) => {
  const { t } = useTranslation();

  return (
    <StyledProjectCard>
      <h3>{title}</h3>
      <img src={img} alt={title} id={id} />
      <StyledCardLinks t={t}>
        <ReactLink to={link} title={t("seeMore")} id="more">
          <FontAwesomeIcon icon={faIdCard} />
        </ReactLink>
        {webLink && (
          <a
            href={webLink}
            title={t("seeDemoTitle")}
            id="demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDesktop} />
          </a>
        )}
        {gitLink && (
          <a
            href={gitLink}
            title={t("seeSrcTitle")}
            id="src"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
      </StyledCardLinks>
    </StyledProjectCard>
  );
};

export default ProjectItem;
