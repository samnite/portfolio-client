import React, { Fragment, useEffect } from 'react';
import './app.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/layout/navbar';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <div className="container">
        <Navbar />
      </div>
    </Fragment>
  );
};

export default App;
