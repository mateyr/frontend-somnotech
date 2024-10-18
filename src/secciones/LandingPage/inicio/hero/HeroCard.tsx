import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import EmergencyIcon from "@mui/icons-material/Emergency";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const HeroCard = () => {
  return (
    <Stack
      spacing={{ xs: 3, md: 0 }}
      px={12}
      direction={{ xs: "column", md: "row" }}
      sx={{ alignItems: "center", justifyContent: "space-evenly" }}
      zIndex={2}
      mt={-10}
    >
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 345,
          p: 1,
          width: { xs: "100%", md: "280px" },
          height: { xs: "280px", md: "320px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "0.3s",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <CardHeader
          sx={{ "& .MuiCardHeader-avatar": { mr: 0 } }}
          avatar={
            <MedicalServicesIcon
              fontSize="large"
              sx={(theme) => ({
                backgroundColor: `${theme.palette.primary.main}`,
                color: "white",
                width: 70,
                height: 70,
                borderRadius: "50%",
                p: 2,
              })}
            />
          }
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={(theme) => ({
              fontWeight: "bold",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -2,
                width: "60%",
                height: "2.5px",
                backgroundColor: `${theme.palette.primary.main}`,
              },
            })}
          >
            Control Clínico
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Accede a tu historial médico, resultados de exámenes y seguimiento
            de tratamientos de forma segura.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 345,
          p: 1,
          width: { xs: "100%", md: "280px" },
          height: { xs: "280px", md: "320px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "0.3s",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <CardHeader
          sx={{ "& .MuiCardHeader-avatar": { mr: 0 } }}
          avatar={
            <EmergencyIcon
              fontSize="large"
              sx={(theme) => ({
                backgroundColor: `${theme.palette.primary.main}`,
                color: "white",
                width: 70,
                height: 70,
                borderRadius: "50%",
                p: 2,
              })}
            />
          }
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={(theme) => ({
              fontWeight: "bold",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -2,
                width: "60%",
                height: "2.5px",
                backgroundColor: `${theme.palette.primary.main}`,
              },
            })}
          >
            Emergencia
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            En caso de urgencias, utilice nuestro botón para conectarse
            directamente con nuestro equipo médico o con los servicios de
            emergencia más cercanos.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          maxWidth: 345,
          p: 1,
          width: { xs: "100%", md: "280px" },
          height: { xs: "280px", md: "320px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "0.3s",
          "&:hover": {
            boxShadow: 6,
          },
        }}
      >
        <CardHeader
          sx={{ "& .MuiCardHeader-avatar": { mr: 0 } }}
          avatar={
            <CalendarMonthIcon
              fontSize="large"
              sx={(theme) => ({
                backgroundColor: `${theme.palette.primary.main}`,
                color: "white",
                width: 70,
                height: 70,
                borderRadius: "50%",
                p: 2,
              })}
            />
          }
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={(theme) => ({
              fontWeight: "bold",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -2,
                width: "60%",
                height: "2.5px",
                backgroundColor: `${theme.palette.primary.main}`,
              },
            })}
          >
            Agenda de citas
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Programa, modifica o cancela tus citas médicas en línea de manera
            rápida y sencilla. Te notificamos recordatorios
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default HeroCard;
