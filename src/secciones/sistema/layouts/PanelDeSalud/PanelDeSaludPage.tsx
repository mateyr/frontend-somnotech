import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SnoozeIcon from "@mui/icons-material/Snooze";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";

import "./../../PanelDeSalud.css";

const PanelDeSaludPage = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {/* Tarjeta de Frecuencia Cardiaca / Respiratoria */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              maxWidth: 345,
              margin: "auto",
              borderRadius: "16px",
              boxShadow: 3,
              border: "2px solid #1856F2",
              color: "#1856F2",
              minHeight: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar sx={{ bgcolor: "#1856F2", color: "white", mb: 2 }}>
                  <FavoriteIcon />
                </Avatar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  Frecuencia cardíaca / Respiratoria
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "0.8rem",
                }}
              >
                Valores normales.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                72 BPM / 16 RPM
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta de Movimiento */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              maxWidth: 345,
              margin: "auto",
              borderRadius: "16px",
              boxShadow: 3,
              border: "2px solid #1856F2", // Borde azul principal
              color: "#1856F2", // Texto y elementos en color principal
              minHeight: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar sx={{ bgcolor: "#1856F2", color: "white", mb: 2 }}>
                  <DirectionsRunIcon />
                </Avatar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  Movimiento
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "0.8rem",
                }}
              >
                Estás en actividad moderada.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Movimientos moderados
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta de Ronquidos */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              maxWidth: 345,
              margin: "auto",
              borderRadius: "16px",
              boxShadow: 3,
              border: "2px solid #1856F2", // Borde azul principal
              color: "#1856F2", // Texto y elementos en color principal
              minHeight: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar sx={{ bgcolor: "#1856F2", color: "white", mb: 2 }}>
                  <SnoozeIcon />
                </Avatar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  Ronquidos
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "0.8rem",
                }}
              >
                No hay signos de apnea del sueño.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Leves
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta de Temperatura Corporal */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              maxWidth: 345,
              margin: "auto",
              borderRadius: "16px",
              boxShadow: 3,
              border: "2px solid #1856F2", // Borde azul principal
              color: "#1856F2", // Texto y elementos en color principal
              minHeight: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar sx={{ bgcolor: "#1856F2", color: "white", mb: 2 }}>
                  <DeviceThermostatIcon />
                </Avatar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "0.9rem",
                  }}
                >
                  Temperatura Corporal
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "0.8rem",
                }}
              >
                Temperatura corporal dentro de lo normal.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "8px",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                36.6°C
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Stack
        spacing={3}
        pt={2}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
      >
        <Stack
          p={1}
          width={{ xs: 350, md: 270 }}
          sx={{
            margin: "auto",
            borderRadius: "16px",
            boxShadow: 3,
            border: "2px solid #1856F2",
            alignItems: "center",
          }}
        >
          <h3 id="frecuencia_cardiaca">Frecuencia cardíaca</h3>
          <Gauge
            sx={(theme) => ({
              width: { xs: 320, md: 250 },
              color: "#123E8C",
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#123E8C",
              },
            })}
            height={160}
            value={50}
            aria-labelledby="frecuencia_cardiaca"
          />
        </Stack>
        <Stack width={{ xs: 350, md: "100%" }}>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                label: "Ciclo de sueño",
                color: "#1856F2",
              },
            ]}
            sx={{
              borderRadius: "16px",
              boxShadow: 3,
              border: "2px solid #1856F2",
            }}
            height={250}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default PanelDeSaludPage;
