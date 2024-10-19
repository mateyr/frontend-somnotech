import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SummarizeIcon from "@mui/icons-material/Summarize";
import WatchIcon from "@mui/icons-material/Watch";

import {
  AppProvider,
  type Navigation,
  type Session,
} from "@toolpad/core/AppProvider";

import { ReactNode, useState } from "react";

import "./PanelDeSalud.css";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Opciones",
  },
  {
    segment: "panel-de-salud",
    title: "Panel de Salud",
    icon: <DashboardIcon />,
  },
  {
    segment: "pacientes",
    title: "Pacientes",
    icon: <PersonIcon />,
    children: [
      {
        segment: "expedientes-medico",
        title: "Expediente médico",
        icon: <ContentPasteIcon />,
      },
      {
        segment: "consultas-recetas-medicas",
        title: "Consultas y recetas médicas",
        icon: <ReceiptIcon />,
      },
    ],
  },

  {
    segment: "dispositivos",
    title: "Dipositivos",
    icon: <WatchIcon />,
  },
  {
    segment: "informes",
    title: "Informes",
    icon: <SummarizeIcon />,
  },
];

interface MainLayoutProps {
  children: ReactNode;
}

const signIn = () => {};

const signOut = () => {};

const AUTHENTICATION = {
  signIn,
  signOut,
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const [session, setSession] = useState<Session | null>({
    user: {
      name: "Rodian Matey",
      email: "mateyrodian@mateytech.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  return (
    <AppProvider
      session={session}
      navigation={NAVIGATION}
      branding={{
        logo: <img src="/imagenes/logo.png" alt="Somnotech logo" />,
        title: "",
      }}
      authentication={AUTHENTICATION}
    >
      {children}
    </AppProvider>
  );
};

export default MainLayout;
