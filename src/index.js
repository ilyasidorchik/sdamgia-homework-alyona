import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import rootReducer from "./modules";
import App from "./App";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
