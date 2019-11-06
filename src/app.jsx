import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/layout/navbar";
import Home from "./components/pages/home";
import Footer from "./components/layout/footer";
import About from "./components/pages/about";
import Project from "./components/pages/project";
import NotFound from "./components/pages/not-found";
import { setMainPage } from "./store/actions/projects-actions";
import { connect } from "react-redux";
import ModalWindow from "./components/layout/modal";

const App = ({ setMainPage, project: { isMain } }) => {
  return (
    <Router>
      <Navbar />
      <ModalWindow />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects/:project" component={Project} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { setMainPage }
)(App);

//TODO Add ClearProject function
