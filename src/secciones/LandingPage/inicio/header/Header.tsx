// TODO: Mejorar un error de la consola del navegador

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Navegacion from "../navegacion/Navegacion";
import AuthNavegacion from "../navegacion/AuthNavegacion";
import Container from "@mui/material/Container";

const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(true);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  const onClickIconButton = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Stack
        position="relative"
        direction="row"
        sx={{
          px: 4,
          py: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="img" src="public/imagenes/logo.png" />

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
