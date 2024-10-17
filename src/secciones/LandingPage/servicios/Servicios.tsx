import Container from "@mui/material/Container";
import Hero from "./hero/Hero";
import Typography from "@mui/material/Typography";
import Servicio from "./servicio/Servicio";
import { servicios } from "./servicio/servicio.data";

const Servicios = () => {
  return (
    <Container>
      <Hero />
      <Typography
        textAlign="center"
        variant="h1"
        color="primary"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", md: "3rem", lg: "rem" },
          mb: 4,
        }}
      >
        Our services
      </Typography>
      {servicios.map((servicio) => (
        <Servicio
          key={servicio.id}
          titulo={servicio.title}
          texto={servicio.texto}
          imagePath={servicio.imagePath}
        />
      ))}
    </Container>
  );
};

export default Servicios;
