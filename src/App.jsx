import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./pages/MainPage.jsx";
import theme from "./theme.js";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <MainPage />
      </ThemeProvider>
    </>
  );
};

export default App;
