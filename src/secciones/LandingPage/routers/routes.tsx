import { Navigate } from "react-router-dom";
import Inicio from "../inicio/Inicio";
import Servicios from "../servicios/Servicios";

export const routers = [
  {
    id: 0,
    path: "/",
    element: <Inicio />,
  },
  {
    id: 1,
    path: "/servicios",
    element: <Servicios />,
  },
  {
    id: 999,
    path: "/*",
    element: <Navigate to="/" />,
  },
];
