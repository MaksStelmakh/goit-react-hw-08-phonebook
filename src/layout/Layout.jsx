import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Navigation, MainTitle } from "./Layout.styled";
import { authSelectors } from "../redux/auth";
import { useSelector } from "react-redux";

export default function Layout() {
  const logedIn = useSelector(authSelectors.getIsLoggedIn);
  const location = useLocation();
  const navMenu = location.pathname === "/";
  return (
    <>
      {navMenu && (
        <MainTitle>
          <div>
            <h1>Welcome to the phonebook!</h1>
            <h2>You need to log in to get started</h2>
          </div>
          <Navigation>
            <NavLink to="/login">Start</NavLink>
          </Navigation>
        </MainTitle>
      )}
      <Outlet />
    </>
  );
}
