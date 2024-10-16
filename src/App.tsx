import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { themePersonalizado } from "./config/theme/themePersonalizado";
import Footer from "./secciones/LandingPage/inicio/footer/Footer";
import Header from "./secciones/LandingPage/inicio/header/Header";
import { RouterProvider } from "react-router-dom";
import { routers } from "./secciones/LandingPage";

function App() {
  return (
    <>
      <ThemeProvider theme={themePersonalizado}>
        <CssBaseline />
        <Header />
        <RouterProvider router={routers} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
