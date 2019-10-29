import React, { Fragment, useEffect } from "react";
import "app.css";
// import "materialize-css/dist/css/materialize.min.css";
import Navbar from "components/layout/navbar";
import M from "materialize-css/dist/js/materialize.min.js";
import Paralax from "components/layout/paralax";
import Skills from "components/layout/skills";

import Slider from "components/layout/slider";
import Showcase from "./components/layout/showcase";

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
      {/*  <Skills />*/}
      {/*  <Slider />*/}
      {/*</div>*/}
    </Fragment>
  );
};

export default App;
