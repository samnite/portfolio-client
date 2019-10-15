import React, { Fragment, useEffect } from 'react';
import './app.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/layout/navbar';
import M from 'materialize-css/dist/js/materialize.min.js';
import Paralax from './components/layout/paralax';
import Skills from './components/layout/skills';

import background1 from './img/background1.jpg';
import Slider from './components/layout/slider';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />

      <Paralax />
      <div className="container">
        <Skills />
        <Slider />
      </div>
      <Paralax />
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </Fragment>
  );
};

export default App;
