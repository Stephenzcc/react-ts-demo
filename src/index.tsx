import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App1";
import App2 from "./App2";
import { Provider } from "react-redux";
import store from "./store";
import UseRedux from "./UseRedux";
import Router from "./router/index";

ReactDOM.render(
  <React.StrictMode>
    {/* <App1 />
    <App2 />
    <Provider store={store}>
      <UseRedux />
    </Provider> */}
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
