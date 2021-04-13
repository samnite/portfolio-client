import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Showcase from "../layout/showcase";
import { StyledContainer } from "../../shared/ui/components";
import Skills from "../layout/skills";
import Projects from "../projects/projects";
import {
  clearProject,
  setMainPage,
} from "../../store/actions/projects-actions";
import ScrollTop from "../layout/scroll-top";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearProject());
    dispatch(setMainPage(true));
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

export default Home;
