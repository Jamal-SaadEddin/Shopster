import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const CartActionButton = () => {
  const navigate = useNavigate();
  const cart = useCart();

  return (
    <Grid item width="100%">
      <Button
        variant="contained"
        size="large"
        onClick={() =>
          navigate(cart.length > 0 ? "/Shopster/checkout" : "/Shopster/")
        }
      >
        {cart.length > 0 ? "Go to checkout" : "Discover Products"}
      </Button>
    </Grid>
  );
};

export default CartActionButton;
