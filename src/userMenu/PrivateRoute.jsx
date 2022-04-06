import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const refreshUser = useSelector(authSelectors.refreshUser);

  if (isLoggedIn) {
    return children;
  } else if (!refreshUser) {
    return children;
  }
  return <Navigate to="/login" />;
}
