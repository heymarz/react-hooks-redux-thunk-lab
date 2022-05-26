import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider, applyMiddleware} from "react-redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import {catsReducer} from "./features/cats/catsSlice";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(catsReducer, composedEnhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root"));
