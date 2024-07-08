import { Grid, Typography } from "@mui/material";
import { useCart } from "../../contexts/CartContext";
import CartItem from "../CartItem";
import CartActionButton from "./CartActionButton";

const CartItems = ({ WithoutActions = false }) => {
  const cart = useCart();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <Grid container pt={2} gap={{ xs: 5, md: 2 }}>
      {cart.map((item) => (
        <CartItem item={item} WithoutActions={WithoutActions} key={item.id} />
      ))}
      <Grid item width="100%">
        <Typography variant="h5" color="#ed6c02">
          Total Amount: ${totalAmount.toFixed(2)}
        </Typography>
      </Grid>
      {!WithoutActions && <CartActionButton />}
    </Grid>
  );
};

export default CartItems;
