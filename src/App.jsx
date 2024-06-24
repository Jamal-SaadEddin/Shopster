import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import { CartProvider } from "./contexts/CartContext.js";
import MainPage from "./pages/MainPage.jsx";
import theme from "./theme.js";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          <Navbar />
          <MainPage />
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
