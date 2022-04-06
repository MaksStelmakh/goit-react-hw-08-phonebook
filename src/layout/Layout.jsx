import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <NavLink to="/phonebook ">Phonebook </NavLink>
      <NavLink to="/login">login </NavLink>
      <NavLink to="/registration">register </NavLink>
      <Outlet />
    </div>
  );
}
