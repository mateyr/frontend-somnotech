import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      sx={{ p: 4 }}
      textAlign={{ xs: "center" }}
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
          We offer Quality Services
        </Typography>
        <Typography variant="body1">
          From the moment a patient steps through your doors to the successful
          collection of payments, our dedicated Revenue Cycle Management (RCM)
          team is committed to identifying and resolving any obstacles hindering
          your financial growth.
        </Typography>
      </Stack>
      <Box component="img" src="imagenes/service-hero.png"></Box>
    </Stack>
  );
};

export default Hero;
