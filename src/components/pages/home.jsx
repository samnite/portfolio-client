import React, { useEffect } from "react";
import { connect } from "react-redux";
import Showcase from "../layout/showcase";
import { StyledContainer } from "../../shared/ui/components";
import Skills from "../layout/skills";
import Projects from "../projects/projects";
import {
  clearProject,
  setMainPage,
} from "../../store/actions/projects-actions";
import ScrollTop from "../layout/scroll-top";

// eslint-disable-next-line no-shadow
const Home = ({ setMainPage, clearProject }) => {
  useEffect(() => {
    clearProject();
    setMainPage(true);
  }, []);
  return (
    <>
      <Showcase />
      <StyledContainer>
        <Skills />
        <Projects />
      </StyledContainer>
      <ScrollTop />
    </>
  );
};

export default connect(null, { setMainPage, clearProject })(Home);
