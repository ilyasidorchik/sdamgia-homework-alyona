import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import createStoreApp from "./store";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <Provider store={createStoreApp}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
