import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StyledButton from "src/shared/styled-button/StyledButton";

const Contacto = () => {
  return (
    <Stack
      id="contacto"
      spacing={3}
      sx={{ mb: 8, textAlign: "center", alignItems: "center" }}
    >
      {/* Texto */}
      <Stack spacing={2}>
        <Typography
          component="span"
          color="primary"
          sx={{ fontWeight: "bold", display: "block", width: "100%" }}
        >
          Informativo
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Únete a nosotros
        </Typography>
        <Typography variant="body2" sx={{ px: 8 }}>
          Transforma tu salud hoy! Contrata nuestros servicios y accede a una
          atención personalizada al alcance de tu mano. Consulta a expertos,
          programa citas y recibe recordatorios para tus tratamientos, todo a un
          solo Clic.
        </Typography>
      </Stack>
      {/* Input */}
      <Stack
        spacing={2}
        direction={{ xs: "column", lg: "row" }}
        width={{ xs: "100%", md: 760 }}
        sx={{ px: 8 }}
      >
        <InputBase
          sx={(theme) => ({
            backgroundColor: "background.paper",
            borderRadius: 1,
            border: `1px solid ${theme.palette.primary.main}`,
            borderColor: "primary",
            width: "100%",
            height: 48,
            px: 2,
          })}
          placeholder="Email"
        />
        <Box>
          <StyledButton disableHoverEffect size="large">
            Subscribe
          </StyledButton>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contacto;
