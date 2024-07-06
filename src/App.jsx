import { CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { CartProvider } from "./contexts/CartContext.js";
import { ProductsProvider } from "./contexts/ProductsContext.js";
import MainPage from "./pages/MainPage.jsx";
import theme from "./theme.js";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          <ProductsProvider>
            <Navbar />
            <MainPage />
            <Footer />
          </ProductsProvider>
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
