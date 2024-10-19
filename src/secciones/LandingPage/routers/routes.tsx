import { Navigate } from "react-router-dom";
import MainLayout from "src/secciones/sistema/MainLayout";
import ExpedienteMedico from "src/secciones/sistema/layouts/ExpedienteMedico/ExpedienteMedico";
import ExpedienteMedicoPage from "src/secciones/sistema/layouts/ExpedienteMedico/ExpedienteMedicoPage";
import PanelDeSalud from "src/secciones/sistema/layouts/PanelDeSalud/PanelDeSalud";
import PanelDeSaludPage from "src/secciones/sistema/layouts/PanelDeSalud/PanelDeSaludPage";
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
    id: 2,
    path: "/panel-de-salud",
    element: (
      <MainLayout children={<PanelDeSalud children={<PanelDeSaludPage />} />} />
    ),
  },
  {
    id: 3,
    path: "pacientes/expedientes-medico",
    element: (
      <MainLayout
        children={<ExpedienteMedico children={<ExpedienteMedicoPage />} />}
      />
    ),
  },
  {
    id: 999,
    path: "/*",
    element: <Navigate to="/" />,
  },
];
