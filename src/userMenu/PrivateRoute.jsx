import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const refreshUser = useSelector(authSelectors.refreshUser);
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
}
