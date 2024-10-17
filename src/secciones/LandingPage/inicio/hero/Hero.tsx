import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StyledButton from "src/shared/styled-button/StyledButton";

const Hero = () => {
  return (
    <Box sx={{ position: "relative", pb: { xs: 4, md: 4 }, pt: 4 }}>
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
      <Box sx={{ position: "relative", mt: { xs: 4, md: -6 }, zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "stretch",
            zIndex: 2,
          }}
        >
          <Card
            sx={{
              width: { xs: "100%", md: "320px" },
              height: { xs: "180px", md: "200px" }, // Altura ajustada para PC
              mx: { xs: 0, md: 2 },
              textAlign: "center",
              boxShadow: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Ajustar para evitar espacio en blanco
              bgcolor: "background.paper",
              transition: "0.3s",
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ padding: 2 }}>
              <VaccinesIcon
                sx={{ fontSize: 35, color: "primary.main", mb: 1 }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  position: "relative",
                  display: "inline-block",
                  pb: 1,
                  mb: 1,
                  "&:after": {
                    content: '""',
                    display: "block",
                    width: "100%",
                    height: "3px",
                    backgroundColor: "primary.main",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                  },
                }}
              >
                Emergencia
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                Accede a tu historial médico, resultados de exámenes y
                seguimiento de tratamientos de forma segura.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: { xs: "100%", md: "320px" },
              height: { xs: "180px", md: "200px" }, // Altura ajustada para PC
              mx: { xs: 0, md: 2 },
              textAlign: "center",
              boxShadow: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Ajustar para evitar espacio en blanco
              bgcolor: "background.paper",
              transition: "0.3s",
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ padding: 2 }}>
              <MedicalServicesIcon
                sx={{ fontSize: 35, color: "primary.main", mb: 1 }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  position: "relative",
                  display: "inline-block",
                  pb: 1,
                  mb: 1,
                  "&:after": {
                    content: '""',
                    display: "block",
                    width: "100%",
                    height: "3px",
                    backgroundColor: "primary.main",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                  },
                }}
              >
                Control clínico
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                Nuestro botón para conectarse directamente con nuestro equipo
                médico o con los servicios de emergencia más cercanos.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: { xs: "100%", md: "320px" },
              height: { xs: "180px", md: "200px" }, // Altura ajustada para PC
              mx: { xs: 0, md: 2 },
              textAlign: "center",
              boxShadow: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start", // Ajustar para evitar espacio en blanco
              bgcolor: "background.paper",
              transition: "0.3s",
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <CardContent sx={{ padding: 2 }}>
              <CalendarMonthIcon
                sx={{ fontSize: 35, color: "primary.main", mb: 1 }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  position: "relative",
                  display: "inline-block",
                  pb: 1,
                  mb: 1,
                  "&:after": {
                    content: '""',
                    display: "block",
                    width: "100%",
                    height: "3px",
                    backgroundColor: "primary.main",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                  },
                }}
              >
                Agenda de citas
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.6 }}
              >
                Programa, modifica o cancela tus citas médicas en línea de
                manera rápida y sencilla. Te notificamos recordatorios.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
