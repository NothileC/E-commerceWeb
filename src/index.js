/* 
The code imports the necessary modules from React and ReactDOM. 
React is the library used for building user interfaces, while ReactDOM 
is responsible for rendering those interfaces into the browser.*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


/*
The code uses the createRoot method from ReactDOM
 to create a root instance. This method is used for concurrent mode 
 rendering, which allows React to work on multiple tasks simultaneously, 
 improving performance.
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

/* The render method of the root instance is 
called to render the application. The application is wrapped 
in <React.StrictMode>, which is a tool for highlighting potential 
problems in the application code and its dependencies.*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
