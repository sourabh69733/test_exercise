import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
// import * as SideBarComponent from "./components/sidebar.component";
import FirstExcercisePage from "./components/firstPageCourse";

// import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <React.StrictMode>
    <FirstExcercisePage />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to change our app work offline then we can change
// it unregrister to regrister
// here is link  to learn more about service worker

// https: developers.google.com / web / fundamentals / primers / service - workers;

// serviceWorker.unregister();
