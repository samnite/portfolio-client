import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getProject,
  setMainPage,
} from "../../../store/actions/projects-actions";
import { StyledCardLinks } from "../../projects/styled-components";
import ModalWindow from "../../util/modal";
import { StyledContainer, StyledSpinner } from "../../../shared/ui/components";
import { StyledProject } from "./styled-components";

const Project = ({ match }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { project, alert } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(setMainPage(false));
    dispatch(getProject(match.params.project));
  }, [match.params.project]);

  if (project === null) {
    if (alert) {
      return <Redirect to="/" />;
    }
    return <StyledSpinner />;
  }

  return (
    <StyledContainer>
      <StyledProject>
        <div>
          <h2>{project.name}</h2>
          <ModalWindow img={project.img_url} title={project.name} />
        </div>
        <div>
          <ul>
            <li>
              <strong>{t("description")}:</strong> {project.description}
            </li>
            <li>
              <ul>
                <strong>{t("techs")}:</strong>
                {project.techs &&
                  project.techs.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
            </li>
          </ul>
          <StyledCardLinks>
            {project.live_url && (
              <a
                href={project.live_url}
                title="See Demo ..."
                id="demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDesktop} size="2x" />
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                title="See Project on GitHub"
                id="src"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            )}
          </StyledCardLinks>
        </div>
      </StyledProject>
    </StyledContainer>
  );
};

export default Project;
