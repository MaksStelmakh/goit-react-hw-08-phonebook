import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import Registration from "../registration/Registration";
import Login from "../login/Login";
import PrivateRoute from "../../userMenu/PrivateRoute";
import PublickRoute from "../../userMenu/PublickRoute";
import Phonebook from "../phonebook/Phonebook";

export default function App() {
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
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}
