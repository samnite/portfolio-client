import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import projectReducer from "./reducers/projects-reducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    project: projectReducer
  });

export default function configureStore(history) {
  const initialState = {};

  const middleware = [thunk];

  return createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware, routerMiddleware(history))
    )
  );
}
