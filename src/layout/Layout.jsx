import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/phonebook ">Phonebook </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
