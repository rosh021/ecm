import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import * as StateProvider from "./StateProvider";

import { StateProvider } from "./StateProvider";
import { reducer, initialState } from "./Components/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
