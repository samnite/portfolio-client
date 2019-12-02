import React from "react";
import { StyledCardLinks, StyledProjectCard } from "./components";
import { Link as ReactLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectItem = ({ title, img, id, link, webLink, gitLink }) => {
  return (
    <StyledProjectCard>
      <h3>{title}</h3>
      <img src={img} alt={title} id={id} />
      <StyledCardLinks>
        <ReactLink to={link} title="See More..." id="more">
          <FontAwesomeIcon icon={faIdCard} />
        </ReactLink>
        {webLink && (
          <a
            href={webLink}
            title="See Demo ..."
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
            title="See Project on GitHub"
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
