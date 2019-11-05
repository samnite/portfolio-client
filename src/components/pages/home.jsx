import React, { Fragment, useEffect } from "react";
import Showcase from "../layout/showcase";
import { StyledContainer } from "../../shared/ui/components";
import Skills from "../layout/skills";
import Projects from "../layout/projects/projects";
import { setMainPage } from "../../store/actions/projects-actions";
import { connect } from "react-redux";

const Home = ({ setMainPage }) => {
  useEffect(() => {
    setMainPage(true);
  }, []);
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

export default connect(
  null,
  { setMainPage }
)(Home);
