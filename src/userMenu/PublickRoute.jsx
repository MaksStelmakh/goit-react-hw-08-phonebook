import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export default function PublickRoute({ children, restricted = false }) {
  const isToken = useSelector(authSelectors.getUsertoken);
  const shouldRedirect = isToken && restricted;
  return shouldRedirect ? <Navigate to="/phonebook" /> : children;
}
