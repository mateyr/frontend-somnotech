import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import StyledButton from "src/shared/styled-button/StyledButton";

const AuthNavegacion = () => {
  return (
    <Box sx={{ "& button:first-of-type": { mr: 2 } }}>
      <StyledButton variant="outlined">Crear una cuenta</StyledButton>
      <StyledButton endIcon={<ArrowForwardIcon />}>Iniciar sesión</StyledButton>
    </Box>
  );
};

export default AuthNavegacion;
