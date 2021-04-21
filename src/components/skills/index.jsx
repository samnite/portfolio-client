import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faSass,
  faWordpressSimple,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import tsLogo from "../../img/logos/typescript.svg";
import firebaseLogo from "../../img/logos/firebase.svg";
import { StyledLHead } from "../../shared/ui/components";
import { StyledSkills, StyledSkillCard } from "./styled-components";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledLHead>{t("mySkills")}</StyledLHead>
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
    </>
  );
};

export default Skills;
