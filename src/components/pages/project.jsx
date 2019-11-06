import React, { useEffect } from "react";
import styled from "styled-components";
import { StyledContainer, StyledSpinner } from "../../shared/ui/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";
import { getProject, setMainPage } from "../../store/actions/projects-actions";
import { StyledCardLinks } from "../layout/projects/components";
import ModalWindow from "../layout/modal";

const StyledProject = styled.div`
  display: grid;
  color: #333;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  h2 {
    color: #333;
  }

  ul {
    margin: 1rem;
    text-align: left;
  }

  img {
    //height: 250px;
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

const Project = ({ getProject, setMainPage, match, project: { project } }) => {
  useEffect(() => {
    setMainPage(false);
    getProject(match.params.project);
    // eslint-disable-next-line
  }, [match.params.project]);

  if (project === null) return <StyledSpinner>Loading...</StyledSpinner>;

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
              <FontAwesomeIcon icon={faDesktop} size="2x" />
            </a>
            <a
              href={project.github_url}
              title="See Project on GitHub"
              id="src"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
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
  { getProject, setMainPage }
)(Project);
