import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./page/app/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Layout from "./layout/Layout";
import Registration from "./page/registration/Registration";
import Login from "./page/login/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="phonebook" element={<App />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
