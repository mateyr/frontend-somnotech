import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { themePersonalizado } from "./config/theme/themePersonalizado";
import { routers } from "./secciones/LandingPage";

function App() {
  return (
    <>
      <ThemeProvider theme={themePersonalizado}>
        <CssBaseline />
        <Routes>
          {routers.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
