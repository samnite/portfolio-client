import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./index.css";
import { HashRouter } from "react-router-dom";
import store from "./store/store";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
// </ConnectedRouter>
// <ConnectedRouter history={history}>
