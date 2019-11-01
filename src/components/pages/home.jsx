import React, { Fragment } from "react";
import Showcase from "../layout/showcase";
import { StyledContainer } from "../../shared/ui/components";
import Skills from "../layout/skills";
import Projects from "../layout/projects/projects";

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <StyledContainer>
        <Skills />
        <Projects />
      </StyledContainer>
    </Fragment>
  );
};

export default Home;
