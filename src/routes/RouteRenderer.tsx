// RouteRenderer.tsx
import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login/Login";
import ProtectedRoutes from "./ProtectedRoutes";

const routesConfig = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <ProtectedRoutes/>,
  },
];

const RouteRenderer: React.FC = () => {
  const router = useRoutes(routesConfig);
  return router;
};

export default RouteRenderer;
