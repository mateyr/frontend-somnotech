import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import FooterNavegacion from "./FooterNavegacion";
import FooterSocialLinks from "./FooterSocialLinks";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Mostrar el botón de scroll cuando el usuario baja en la página
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.pageYOffset;
      setIsVisible(scrollPosition > 300);
      // Verificar si el botón está en el footer
      const footerPosition = document.querySelector("footer")?.offsetTop;
      if (footerPosition) {
        setIsFooterVisible(
          scrollPosition >= footerPosition - window.innerHeight
        );
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
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

      {/* Botón de Scroll To Top */}
      {isVisible && (
        <Box
          component={ScrollLink}
          to="header"
          smooth={true}
          duration={350}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            backgroundColor: isFooterVisible ? "white" : "primary.main", // Color del fondo
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              cursor: "pointer",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
            },
          }}
          aria-label="Scroll to top"
        >
          <ArrowCircleUpIcon
            sx={{
              fontSize: 40,
              color: isFooterVisible ? "primary.main" : "white",
            }} // Color del icono
          />
        </Box>
      )}
    </Box>
  );
};

export default Footer;
