import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { themePersonalizado } from "./config/theme/themePersonalizado";
import Contacto from "./secciones/LandingPage/contacto/Contacto";
import Equipo from "./secciones/LandingPage/equipo/Equipo";
import Header from "./secciones/LandingPage/header/Header";
import Hero from "./secciones/LandingPage/hero/Hero";
import Precios from "./secciones/LandingPage/precios/Precios";
import Productos from "./secciones/LandingPage/productos/Productos";
import Footer from "./secciones/LandingPage/footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={themePersonalizado}>
        <CssBaseline />
        <Header />
        <Container>
          <Hero />
          <Productos />
          <Equipo />
          <Precios />
          <Contacto />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
