import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import useAllUser from "../api/useAllUser";

const PrivateRouter = ({ children }) => {
  const { isLoading } = useAllUser();
  const { user } = useSelector((state) => state.authUsers);
  const location = useLocation();
  if (isLoading) {
    return <p> Loading.. </p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};
PrivateRouter.propTypes = {
  children: PropTypes.node,
};
export default PrivateRouter;
