import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import "app.css";
import Navbar from "components/layout/navbar";
import Home from "./components/pages/home";
import Footer from "./components/layout/footer";
import About from "./components/pages/about";
import Project from "./components/pages/project";
import NotFound from "./components/pages/not-found";

const App = () => {
  useEffect(() => {});
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects/:project" component={Project} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
