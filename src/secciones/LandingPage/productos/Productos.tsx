import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import StyledButton from "src/shared/styled-button/StyledButton";

const Productos = () => {
  const theme = useTheme();

  return (
    <Stack
      id="productos"
      spacing={14}
      direction={{ md: "row" }}
      sx={{ pt: 6, alignItems: { xs: "center", md: "center" } }}
    >
      <Stack
        spacing={2}
        sx={{
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            position: "relative",
            mt: { xs: 0, md: 7 },
            mb: 4,
            lineHeight: 1,
            fontWeight: "bold",
            "&::after": {
              content: '""',
              display: "block",
              width: "50%",
              height: "4px",
              backgroundColor: theme.palette.primary.main,
              margin: "8px auto 0",
              marginLeft: { md: 0 },
            },
          }}
        >
          Conoce nuestro dispositivo
        </Typography>
        <Typography variant="body2">
          La capacidad de medir los niveles de salud a través de un reloj
          inteligente ofrece monitoreo en tiempo real de indicadores clave como
          la frecuencia cardíaca, el oxígeno en sangre y el sueño, todo desde la
          comodidad de tu muñeca. Esto permite un control personalizado y
          accesible, fomentando un estilo de
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: { xs: 2, md: 3 } }}>
          <StyledButton variant="outlined">Leer más</StyledButton>
        </Stack>
      </Stack>
      <Box
        component="img"
        src="/imagenes/producto.png"
        sx={{
          maxWidth: { xs: "80%", sm: "100%", md: "45%" },
          height: { xs: "auto", md: "350px" },
          objectFit: "contain",
          ml: { md: 4 },
          mt: { xs: 4, md: 0 },
        }}
      />
    </Stack>
  );
};

export default Productos;
