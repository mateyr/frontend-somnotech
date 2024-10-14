import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import AuthNavegacion from "../navegacion/AuthNavegacion";
import Navegacion from "../navegacion/Navegacion";

const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("lg"));

  return (
    <>
      <Box sx={{ backgroundColor: "background.paper" }}>
        <Container sx={{ py: { xs: 2, md: 2 } }}>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ zIndex: "drawer" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Servicios Médicos
              </Typography>
            </Box>
            <Box
              sx={{
                ml: "auto",
                display: {
                  xs: "inline-flex",
                  md: "none",
                },
              }}
            >
              <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
                <Menu />
              </IconButton>
            </Box>
            <Stack
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { lg: "row" },
                transition: (theme) => theme.transitions.create(["top"]),
                ...(matchMobileView && {
                  py: 6,
                  backgroundColor: "background.paper",
                  position: "fixed",
                  height: { xs: "50vh", md: "auto" },
                  top: visibleMenu ? 0 : "-120vh",
                  left: 0,
                }),
                zIndex: "appBar",
              }}
            >
              <Box />
              <Navegacion />
              <AuthNavegacion />
              {visibleMenu && matchMobileView && (
                <IconButton
                  sx={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                  }}
                  onClick={() => setVisibleMenu(!visibleMenu)}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
