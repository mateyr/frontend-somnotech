import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Equipo = () => {
  return (
    <Stack id="equipo" spacing={3} sx={{ py: 6 }}>
      {/* Texto */}
      <Stack spacing={3}>
        <Typography
          component="span"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Equipo
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: { xs: "center", md: "left" } }}
        >
          Nuestro Equipo Médico
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          Nuestro equipo médico está compuesto por especialistas altamente
          calificados y con años de experiencia en diversas áreas de la salud.
          Cada uno de ellos se compromete a brindar un trato personalizado y
          humano, garantizando un diagnóstico preciso y un tratamiento eficaz.
          Trabajamos en conjunto para ofrecerle la mejor atención, siempre con
          empatía y profesionalismo. Tu bienestar es nuestra misión principal.
        </Typography>
      </Stack>
      {/* Imagenes */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "space-around" }}
      >
        <Card
          sx={{
            minWidth: 320,
            minHeight: 260,
            maxWidth: 360,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2,
            borderRadius: 6,
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Medico 3"
            height="260"
            image="imagenes/medico1.jpg"
            sx={{
              objectFit: "cover", // Mantener la proporción y llenar el espacio
              borderRadius: 3, // Bordes redondeados
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
            >
              Dr. Julian Jameson
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="span"
              color="textSecondary"
            >
              Neumología
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", padding: 1 }}>
            <FacebookIcon
              sx={{ color: "#3b5998", "&:hover": { color: "#8b9dc3" } }}
            />
            <InstagramIcon
              sx={{ color: "#e4405f", "&:hover": { color: "#f77737" } }}
            />
            <XIcon sx={{ color: "#00acee", "&:hover": { color: "#1da1f2" } }} />
          </CardActions>
        </Card>
        <Card
          sx={{
            minWidth: 320,
            minHeight: 260,
            maxWidth: 360,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2,
            borderRadius: 6,
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Medico 3"
            height="260"
            image="imagenes/medico2.jpg"
            sx={{
              objectFit: "cover", // Mantener la proporción y llenar el espacio
              borderRadius: 3, // Bordes redondeados
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
            >
              Dr. Emorie Aguirre
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="span"
              color="textSecondary"
            >
              Cardiología
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", padding: 1 }}>
            <FacebookIcon
              sx={{ color: "#3b5998", "&:hover": { color: "#8b9dc3" } }}
            />
            <InstagramIcon
              sx={{ color: "#e4405f", "&:hover": { color: "#f77737" } }}
            />
            <XIcon sx={{ color: "#00acee", "&:hover": { color: "#1da1f2" } }} />
          </CardActions>
        </Card>

        <Card
          sx={{
            minWidth: 320,
            minHeight: 260,
            maxWidth: 360,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2,
            borderRadius: 6,
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Medico 3"
            height="260"
            image="imagenes/medico3.jpg"
            sx={{
              objectFit: "cover",
              borderRadius: 3,
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
            >
              Dr. Rodian Matey
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="span"
              color="textSecondary"
            >
              Pediatría
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", padding: 1 }}>
            <FacebookIcon
              sx={{ color: "#3b5998", "&:hover": { color: "#8b9dc3" } }}
            />
            <InstagramIcon
              sx={{ color: "#e4405f", "&:hover": { color: "#f77737" } }}
            />
            <XIcon sx={{ color: "#00acee", "&:hover": { color: "#1da1f2" } }} />
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Equipo;
