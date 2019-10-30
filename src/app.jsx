import React, { Fragment, useEffect } from "react";
import "app.css";
// import "materialize-css/dist/css/materialize.min.css";
import Navbar from "components/layout/navbar";
import M from "materialize-css/dist/js/materialize.min.js";
import Skills from "components/layout/skills";

import Showcase from "./components/layout/showcase";
import { StyledContainer } from "./shared/ui/components";
import Projects from "./components/layout/projects/projects";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <Showcase />
      <StyledContainer>
        <Skills />
      </StyledContainer>
      <StyledContainer>
        <Projects />
      </StyledContainer>
    </Fragment>
  );
};

export default App;
