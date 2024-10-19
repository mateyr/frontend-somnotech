import Container from "@mui/material/Container";
import Contacto from "./contacto/Contacto";
import Equipo from "./equipo/Equipo";
import Hero from "./hero/Hero";
import Precios from "./precios/Precios";
import Productos from "./productos/Productos";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Inicio = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <Productos />
        <Equipo />
        <Precios />
        <Contacto />
      </Container>
      <Footer />
    </>
  );
};

export default Inicio;
