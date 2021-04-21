import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer/footer";
import About from "./pages/about";
import Project from "./pages/project";
import NotFound from "./pages/not-found";
import Alert from "./util/alert";
import Admin from "./pages/admin";
import Projects from "./components/projects";

const App = () => (
  <>
    <Navbar />
    <Alert />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />
      <Route path="/projects/:project" component={Project} />
      <Route exdct path="/projects" component={Projects} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </>
);

export default App;
