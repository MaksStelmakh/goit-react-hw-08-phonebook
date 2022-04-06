import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors } from "../../redux/auth";
import Layout from "../../layout/Layout";
import Registration from "../registration/Registration";
import Login from "../login/Login";
import PrivateRoute from "../../userMenu/PrivateRoute";
import PublickRoute from "../../userMenu/PublickRoute";
import Phonebook from "../phonebook/Phonebook";
import authOperations from "../../redux/auth/auth-operations";

export default function App() {
  const refreshUser = useSelector(authSelectors.refreshUser);
  const logedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(logedIn);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/login"
          element={
            <PublickRoute restricted>
              <Login />
            </PublickRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublickRoute restricted>
              <Registration />
            </PublickRoute>
          }
        />
        (
        <Route
          path="/phonebook"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
        )
      </Route>
    </Routes>
  );
}
