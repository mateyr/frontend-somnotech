import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

const PacienteDetalle = () => {
  return (
    <Stack>
      {/* Paciente Info */}
      <Card>
        <CardHeader>
          <CardMedia
            component="img"
            height="194"
            image="imagenes/paciente"
            alt="Paella dish"
          />
        </CardHeader>
      </Card>
      {/* Historial de enfermedades */}
      <Card></Card>
    </Stack>
  );
};

export default PacienteDetalle;
