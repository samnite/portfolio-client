import React, { Fragment, useEffect } from "react";
import "app.css";
// import "materialize-css/dist/css/materialize.min.css";
import Navbar from "components/layout/navbar";
import M from "materialize-css/dist/js/materialize.min.js";
import Skills from "components/layout/skills";

import Slider from "components/layout/slider";
import Showcase from "./components/layout/showcase";
import { StyledContainer } from "./shared/ui/components";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <Showcase />

      {/*<Paralax />*/}
      {/*<div className="container">*/}
      <StyledContainer>
        <Skills />
      </StyledContainer>
      {/*  <Slider />*/}
      {/*</div>*/}
      <StyledContainer>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </StyledContainer>
    </Fragment>
  );
};

export default App;
