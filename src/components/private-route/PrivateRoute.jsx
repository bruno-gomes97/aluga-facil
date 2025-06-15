import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
	const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/" replace />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

  return children;
}

export default PrivateRoute;