import React, { Fragment, useEffect } from "react";
import "app.css";
import Navbar from "components/layout/navbar";
import M from "materialize-css/dist/js/materialize.min.js";

import Home from "./components/pages/home";
import Footer from "./components/layout/footer";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;
