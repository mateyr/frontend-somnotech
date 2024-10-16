import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";
import StyledButton from "src/shared/styled-button/StyledButton";

const AuthNavegacion = () => {
  return (
    <Stack spacing={3} direction="row" sx={{ justifyContent: "center" }}>
      <StyledButton variant="outlined">Crear una cuenta</StyledButton>
      <StyledButton endIcon={<ArrowForwardIcon />}>Iniciar sesión</StyledButton>
    </Stack>
  );
};

export default AuthNavegacion;
