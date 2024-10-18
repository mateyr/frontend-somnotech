import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StyledButton from "src/shared/styled-button/StyledButton";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <Container id="hero" maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Box
        sx={{
          position: "relative",
          pb: { xs: 4, md: 4 },
          pt: { xs: 4, md: 0 },
          ml: { lg: "80px" },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 2 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            spacing={2}
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography
              width="100%"
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", md: "3rem", lg: "rem" },
                mb: { xs: 1, md: 1 },
              }}
            >
              Cuidado Médico de Confianza para Toda la Familia
            </Typography>
            <Typography
              width="100%"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              Somnotech es una innovadora plataforma médica que conecta a los
              pacientes con un equipo de médicos especializados. Contamos con un
              dispositivo Smartband que monitorea en tiempo real los signos
              vitales, mejora tu calidad de vida.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: { xs: 2, md: 3 } }}>
              <StyledButton>Más información</StyledButton>
            </Stack>
          </Stack>
          <Box
            component="img"
            sx={{
              height: { xs: "auto", sm: "60vh", md: "75vh", lg: "80vh" },
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "cover",
              mb: { xs: 2, md: 0 },
            }}
            alt="Imagen Hero"
            src="/imagenes/doctora-fondo.png"
          />
        </Stack>
        <HeroCard />
      </Box>
    </Container>
  );
};

export default Hero;
