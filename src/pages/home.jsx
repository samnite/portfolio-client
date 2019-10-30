import React, { Fragment } from "react";
import Showcase from "../components/layout/showcase";
import { StyledContainer } from "../shared/ui/components";
import Skills from "../components/layout/skills";
import Projects from "../components/layout/projects/projects";

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
