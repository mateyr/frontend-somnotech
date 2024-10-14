import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import { Enlace, enlaces } from "../navegacion";
import FooterSectionTitulo from "./FooterSectionTitulo";

const informacion: Enlace[] = [
  {
    label: "Sobre nosotros",
    path: "#",
  },
  {
    label: "Trayectoria",
    path: "#",
  },
  {
    label: "Estamos contratando",
    path: "#",
  },
  {
    label: "Blog",
    path: "#",
  },
];

const pageMenu = enlaces;

const companyMenu: Enlace[] = [
  { label: "Marketing empresarial", path: "#" },
  { label: "Análisis de usuarios", path: "#" },
  { label: "Chat en vivo", path: "#" },
  { label: "Soporte ilimitado", path: "#" },
];

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem = ({ label, path }: NavigationItemProps) => {
  return (
    <MuiLink
      href={path}
      underline="hover"
      sx={{
        display: "block",
        mb: 1,
        color: "primary.contrastText",
      }}
    >
      {label}
    </MuiLink>
  );
};

const FooterNavigation = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitulo title="Información" />
        {informacion.map(({ label, path }, index) => (
          <NavigationItem
            key={index + path}
            label={label}
            path={/* path */ "#"}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitulo title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitulo title="Características" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
