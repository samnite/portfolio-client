import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "components/layout/navbar";
import Home from "./components/pages/home";
import Footer from "./components/layout/footer";
import About from "./components/pages/about";
import Project from "./components/pages/project";
import NotFound from "./components/pages/not-found";
import Alert from "./components/layout/alert";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects/:project" component={Project} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;

//TODO Remove Empty XML Tag
