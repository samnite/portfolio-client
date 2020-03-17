import React, { Fragment, useEffect } from "react";
import Showcase from "../layout/showcase";
import { StyledContainer } from "../../shared/ui/components";
import Skills from "../layout/skills";
import Projects from "../projects/projects";
import {
  setMainPage,
  clearProject
} from "../../store/actions/projects-actions";
import { connect } from "react-redux";
import ScrollTop from "../layout/scroll-top";

const Home = ({ setMainPage, clearProject }) => {
  useEffect(() => {
    clearProject();
    setMainPage(true);
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Showcase />
      <StyledContainer>
        <Skills />
        <Projects />
      </StyledContainer>
      <ScrollTop />
    </Fragment>
  );
};

export default connect(
  null,
  { setMainPage, clearProject }
)(Home);
