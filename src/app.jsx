import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Navbar from "components/layout/navbar";
import Home from "./components/pages/home";
import Footer from "./components/layout/footer";
import About from "./components/pages/about";
import Project from "./components/pages/project";
import NotFound from "./components/pages/not-found";
import Alert from "./components/layout/alert";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Navbar />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects/:project" component={Project} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </ConnectedRouter>
  );
};

export default App;

//TODO Remove Empty XML Tag
