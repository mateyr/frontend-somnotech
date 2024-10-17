import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface ServicioProps {
  titulo: string;
  texto: string;
  imagePath: string;
}

const Servicio = ({ titulo, texto, imagePath }: ServicioProps) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      sx={{ p: 4, backgroundColor: "#0084C31A" }}
      textAlign={{ xs: "center" }}
      my={4}
    >
      <Stack spacing={3} sx={{ justifyContent: "center" }}>
        <Typography
          variant="h1"
          color="primary"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "3rem", lg: "rem" },
            mb: { xs: 1, md: 1 },
          }}
        >
          {titulo}
        </Typography>
        <Typography variant="body1">{texto}</Typography>
      </Stack>
      <Box component="img" src={imagePath} />
    </Stack>
  );
};

export default Servicio;
