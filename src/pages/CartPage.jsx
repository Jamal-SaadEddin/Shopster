import { Paper, Typography } from "@mui/material";
import CartItems from "../components/CartItems";
import { useCart } from "../contexts/CartContext";

const CartPage = () => {
  const cart = useCart();
  const cartItemsCount = cart.reduce((acc, item) => (acc += item.count), 0);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {cart.length > 0 ? "Shopping Cart" : "Your Shopster Cart is empty."}
      </Typography>
      {cart.length > 0 && (
        <Typography variant="h6" color="#ed6c02" gutterBottom>
          {`Items Added (${cartItemsCount})`}
        </Typography>
      )}
      <CartItems />
    </Paper>
  );
};

export default CartPage;
