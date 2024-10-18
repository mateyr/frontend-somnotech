// TODO: Mejorar un error de la consola del navegador

import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import AuthNavegacion from "../navegacion/AuthNavegacion";
import Navegacion from "../navegacion/Navegacion";
import { Link } from "react-router-dom";

const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(true);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  const onClickIconButton = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <Container id="header" maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Stack
        position="relative"
        direction="row"
        sx={{
          px: { xs: 1, md: 4 },
          py: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <Box component="img" src="/imagenes/logo.png" />
        </Link>

        {!matchMobileView && (
          <>
            <Navegacion />
            <AuthNavegacion />
          </>
        )}

        {visibleMenu || (
          <Stack
            position="absolute"
            spacing={3}
            width="100%"
            zIndex="appBar"
            sx={{
              p: 3,
              top: 90,
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "background.paper",
              display: matchMobileView ? "block" : "none",
            }}
          >
            <Navegacion />
            <AuthNavegacion />
          </Stack>
        )}

        {matchMobileView && (
          <IconButton onClick={() => onClickIconButton()}>
            {visibleMenu ? <Menu /> : <CloseIcon />}
          </IconButton>
        )}
      </Stack>
    </Container>
  );
};

export default Header;
