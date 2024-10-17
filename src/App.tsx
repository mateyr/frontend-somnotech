import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { themePersonalizado } from "./config/theme/themePersonalizado";
import { routers } from "./secciones/LandingPage";
import Footer from "./secciones/LandingPage/inicio/footer/Footer";
import Header from "./secciones/LandingPage/inicio/header/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={themePersonalizado}>
        <CssBaseline />
        <Header />
        <Routes>
          {routers.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
