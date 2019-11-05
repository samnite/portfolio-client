import React, { useEffect } from "react";
import styled from "styled-components";
import {
  StyledContainer,
  StyledPrimaryButton
} from "../../shared/ui/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";
import { getProject } from "../../store/actions/projects-actions";
import { StyledCardLinks } from "../layout/projects/components";

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    height: 250px;
  }
  div:last-child {
    //border-left: 1px dotted #333;
    //padding-top: 3rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    img {
      height: 180px;
    }
  }
`;

const Project = ({ getProject, match, project: { project } }) => {
  useEffect(() => {
    getProject(match.params.project);
  }, [match.params.project]);

  if (project === null) return <p>Loading...</p>;

  return (
    <StyledContainer>
      <StyledPrimaryButton>Back</StyledPrimaryButton>
      <StyledProject>
        <div>
          <h2>{project.name}</h2>
          <img src={project.img_url} alt="GitHub Finder" />
        </div>
        <div>
          <ul>
            <li>
              <strong>Description:</strong> {project.description}
            </li>
            <li>
              <ul>
                <strong>Techs:</strong>
                {project.techs.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </li>
          </ul>
          <StyledCardLinks>
            <a
              href={project.live_url}
              title="See Demo ..."
              id="demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDesktop} />
            </a>
            <a
              href={project.github_url}
              title="See Project on GitHub"
              id="src"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </StyledCardLinks>
        </div>
      </StyledProject>
    </StyledContainer>
  );
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProject }
)(Project);
