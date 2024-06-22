import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import theme from "../theme.js";

const HomePage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default HomePage;
