import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CartItem from "./CartItem";

const InCart_Items = ({ brief = false }) => {
  const navigate = useNavigate();
  const cart = useCart();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <Grid container pt={2} gap={{ xs: 5, md: 2 }}>
      {cart.map((item) => (
        <CartItem item={item} brief={brief} key={item.id} />
      ))}
      <Grid item width="100%">
        <Typography variant="h5" color="#ed6c02">
          Total Amount: ${totalAmount.toFixed(2)}
        </Typography>
      </Grid>
      {!brief && (
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
      )}
    </Grid>
  );
};

export default InCart_Items;
