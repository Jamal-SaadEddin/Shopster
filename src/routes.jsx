import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import { products } from "./constants/products";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Products products={products} />,
      },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

export default router;
