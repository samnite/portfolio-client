import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faWordpressSimple
} from "@fortawesome/free-brands-svg-icons";
import tsLogo from "../../img/logos/typescript.svg";
import firebaseLogo from "../../img/logos/firebase.svg";
import styled from "styled-components";
import { StyledLHead } from "../../shared/ui/components";

const StyledSkills = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledSkillCard = styled.div`
  text-align: center;
  color: #333;
  justify-content: center;
  background: #eff1ec;
  padding: 1rem 0.5rem;
  border-radius: 25px;
  h2 {
    font-size: 1rem;
    margin-top: 0.75rem;
  }
`;

const Skills = () => {
  return (
    <Fragment>
      <StyledLHead>My Skills</StyledLHead>
      <StyledSkills>
        <StyledSkillCard>
          <FontAwesomeIcon icon={faReact} size="3x" color="cyan" />
          <h2>ReactJS</h2>
        </StyledSkillCard>
        <StyledSkillCard>
          <FontAwesomeIcon icon={faJs} size="3x" color="yellow" />
          <h2>JavaScript</h2>
        </StyledSkillCard>
        <StyledSkillCard>
          <FontAwesomeIcon icon={faHtml5} size="3x" color="orange" />
          <h2>HTML5</h2>
        </StyledSkillCard>
        <StyledSkillCard>
          <FontAwesomeIcon icon={faCss3} size="3x" color="blue" />
          <h2>CSS3</h2>
        </StyledSkillCard>
        <StyledSkillCard>
          <FontAwesomeIcon icon={faSass} size="3x" color="#CD6799" />
          <h2>Sass</h2>
        </StyledSkillCard>
        <StyledSkillCard>
          <img src={tsLogo} alt="Typescript" style={{ width: "48px" }} />
          <h2>TypeScript</h2>
        </StyledSkillCard>
        <StyledSkillCard>
          <img src={firebaseLogo} alt="Firebase" style={{ width: "48px" }} />
          <h2>Firebase</h2>
        </StyledSkillCard>
        <StyledSkillCard>
          <FontAwesomeIcon icon={faWordpressSimple} size="3x" color="#00749C" />
          <h2>WordPress</h2>
        </StyledSkillCard>
      </StyledSkills>
    </Fragment>
  );
};

export default Skills;
