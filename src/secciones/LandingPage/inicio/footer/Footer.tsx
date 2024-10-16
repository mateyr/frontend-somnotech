import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterNavegacion from "./FooterNavegacion";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        py: { xs: 6, md: 10 },
        color: "primary.contrastText",
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: "100%", md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography
                component="h2"
                variant="h2"
                sx={{ mb: 2, fontWeight: "bold" }}
              >
                SomnoTech
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="subtitle1" sx={{ letterSpacing: 1 }}>
                  +123 456 7890
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="subtitle1" sx={{ letterSpacing: 1 }}>
                  123 Example St, City, Country
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <MailIcon sx={{ mr: 1 }} />
                <Typography variant="subtitle1" sx={{ letterSpacing: 1 }}>
                  info@somnotech.com
                </Typography>
              </Box>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavegacion />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
