import Container from "@mui/material/Container";
import Contacto from "./contacto/Contacto";
import Equipo from "./equipo/Equipo";
import Hero from "./hero/Hero";
import Precios from "./precios/Precios";
import Productos from "./productos/Productos";

const Inicio = () => {
  return (
    <>
      <Hero />
      <Container>
        <Productos />
        <Equipo />
        <Precios />
        <Contacto />
      </Container>
    </>
  );
};

export default Inicio;
