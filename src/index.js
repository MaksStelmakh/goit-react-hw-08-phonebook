import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./page/app/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./layout/Layout";
import Registration from "./page/registration/Registration";
import Login from "./page/login/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="phonebook" element={<App />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
