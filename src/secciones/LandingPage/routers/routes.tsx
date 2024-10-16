import { createBrowserRouter } from "react-router-dom";
import Inicio from "../inicio/Inicio";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
]);
