import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import { useAuth } from "./AuthContext";

const ProtectedRoutes: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const prevLogin = localStorage.getItem("isLogin");
  
  if (isLoggedIn || prevLogin !== null) {
    return <Home />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
