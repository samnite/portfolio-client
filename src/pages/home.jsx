import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Index from "../components/showcase";
import { StyledContainer } from "../shared/ui/components";
import Skills from "../components/skills";
import Projects from "../components/projects";
import { clearProject, setMainPage } from "../store/actions/projects-actions";
import ScrollTop from "../components/scroll-to-top";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearProject());
    dispatch(setMainPage(true));
  }, []);
  return (
    <>
      <Index />
      <StyledContainer>
        <Skills />
        <Projects />
      </StyledContainer>
      <ScrollTop />
    </>
  );
};

export default Home;
