import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./index.css";
import store from "./store/store";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
