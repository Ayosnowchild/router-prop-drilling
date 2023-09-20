import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// install your package
// define your router inside index.js or router file(import router inside index.js)
// dont forget to import createBrowserRouter from react-router-dom
// render RouterProvider in place of App in index.js and send router element(imported) as props
// we will render App as the main elemnt in router i.e on the base path
// inside App, we inport Outlet from react-router-dom and then define the children with the children key in router
