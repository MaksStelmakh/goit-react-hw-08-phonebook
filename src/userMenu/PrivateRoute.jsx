import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../redux/auth";

export default function PrivateRoute({ children }) {
  const haveToken = useSelector(authSelectors.getUsertoken);
  if (haveToken !== null) {
    return children;
  }
  return <Navigate to="/login" />;
}
