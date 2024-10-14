import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const niveles = [
  {
    titulo: "Básico",
    precio: "10",
    descripcion: [
      "Monitoreo de variables básicas: frecuencia cardíaca, frecuencia respiratoria, y calidad de sueño.",
      "Reportes semanales y alertas en la app",
      "Recomendaciones generales para mejorar la salud",
      "Atención al cliente estándar",
    ],
    textoButton: "Elige un plan",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
  {
    titulo: "Estándar",
    subheader: "Recomendado",
    precio: "20",
    descripcion: [
      "Todo lo incluido en el Plan Básico.",
      "Monitoreo de variables avanzadas temperatura corporal, movimientos corporales y registro de ronquidos.",
      "Acceso a reportes diarios",
      "Alertas personalizadas",
      "Descuentos en Fitshops ",
      "Soporte técnico preferencial",
    ],
    textoButton: "Elige tu plan",
    buttonVariant: "outlined",
    buttonColor: "secondary",
  },
  {
    titulo: "Premium",
    precio: "30",
    descripcion: [
      "Todo lo incluido en el Plan Estándar.",
      "Consultas virtuales con un médico afiliado a la plataforma",
      "Recomendaciones personalizadas",
      "Reportes completos y compartición de datos con otros especialistas médicos.",
    ],
    textoButton: "Elige tu plan",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
];

const Precios = () => {
  const theme = useTheme();

  return (
    <Container
      id="precios"
      sx={{
        pt: { xs: 4, sm: 6 },
        pb: { xs: 8, sm: 12 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        {/* Título */}
        <Stack textAlign="center">
          <Typography variant="h5" color="textSecondary">
            Los mejores planes{" "}
            <Typography
              component="span"
              color="primary"
              sx={{
                fontWeight: "bold",
                fontSize: "1.25em",
              }}
            >
              SomnoTech
            </Typography>
          </Typography>
        </Stack>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
      >
        {niveles.map((nivel) => {
          return (
            <Grid
              size={{
                xs: 12,
                sm: nivel.titulo === "Enterprise" ? 12 : 6,
                md: 4,
              }}
              key={nivel.titulo}
            >
              <Card
                sx={[
                  {
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  },
                  nivel.titulo === "Estándar" && {
                    border: "none",
                    background: theme.palette.primary.main,
                    boxShadow: `0 4px 8px rgba(0, 0, 0, 0.1)`,
                  },
                ]}
              >
                <CardContent>
                  <Box
                    sx={[
                      {
                        mb: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                      },
                      nivel.titulo === "Estándar"
                        ? { color: "white" }
                        : { color: theme.palette.text.primary },
                    ]}
                  >
                    <Typography component="h3" variant="h6">
                      {nivel.titulo}
                    </Typography>
                    {nivel.titulo === "Estándar" && (
                      <Chip
                        icon={<AutoAwesomeIcon color="info" />}
                        label={nivel.subheader}
                        sx={{ backgroundColor: "white" }}
                      />
                    )}
                  </Box>
                  <Box
                    sx={[
                      {
                        display: "flex",
                        alignItems: "baseline",
                      },
                      nivel.titulo === "Estándar"
                        ? { color: "white" }
                        : { color: null },
                    ]}
                  >
                    <Typography component="h3" variant="h2">
                      ${nivel.precio}
                    </Typography>
                    <Typography component="h3" variant="h6">
                      &nbsp; al mes
                    </Typography>
                  </Box>
                  <Divider
                    sx={{ my: 2, opacity: 0.8, borderColor: "divider" }}
                  />
                  {nivel.descripcion.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={[
                          {
                            width: 20,
                          },
                          nivel.titulo === "Estándar"
                            ? { color: "white" }
                            : { color: "primary.main" },
                        ]}
                      />
                      <Typography
                        // variant="h1"
                        component={"span"}
                        sx={[
                          nivel.titulo === "Estándar"
                            ? { color: "grey.50" }
                            : { color: null },
                        ]}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={nivel.buttonVariant as "outlined" | "contained"}
                    sx={{
                      backgroundColor:
                        nivel.titulo === "Estándar" ? "white" : undefined,
                      "&:hover": {
                        backgroundColor:
                          nivel.titulo === "Estándar" ? "#f0f4ff" : undefined,
                        borderColor:
                          nivel.titulo === "Estándar" ? "#1856F2" : undefined,
                      },
                    }}
                  >
                    {nivel.textoButton}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Precios;
