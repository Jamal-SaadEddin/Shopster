import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart, useCartDispatch } from "../contexts/CartContext";

const InCart_Items = () => {
  const navigate = useNavigate();
  const cart = useCart();
  const cartDispatch = useCartDispatch();
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <Grid container pt={2} gap={2}>
      {cart.map((item) => (
        <Grid item width="100%" key={item.id}>
          <Stack direction="row" gap={5}>
            <Stack
              direction="row"
              columnGap={2}
              maxWidth={320}
              width="fit-content"
            >
              <img src={item.imageUrl} alt={item.name} width={85} />
              <Stack direction="column">
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="caption">{item.description}</Typography>
                <Typography variant="body2" color="#ed6c02">
                  ${item.price}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column">
              <Typography variant="h6" color="#ed6c02">
                {item.count} In Cart
              </Typography>
              <Typography variant="h6" color="#ed6c02">
                Price: ${(item.price * item.count).toFixed(2)}
              </Typography>
              <Stack direction="row" width="fit-content">
                <IconButton
                  aria-label="remove 1 item from cart"
                  color="inherit"
                  onClick={() => cartDispatch({ type: "remove", id: item.id })}
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  aria-label="add 1 item to cart"
                  color="inherit"
                  onClick={() =>
                    cartDispatch({ type: "add", ...item, count: 1 })
                  }
                >
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>
            <Stack direction="column" justifyContent="center">
              <Button
                variant="contained"
                color="error"
                onClick={() =>
                  cartDispatch({ type: "removeItemAll", id: item.id })
                }
              >
                Remove from cart
              </Button>
            </Stack>
          </Stack>
          <Divider />
        </Grid>
      ))}
      <Grid item width="100%">
        <Typography variant="h5" color="#ed6c02">
          Total Amount: ${totalAmount.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item width="100%">
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate(cart.length > 0 ? "/checkout" : "/")}
        >
          {cart.length > 0 ? "Go to checkout" : "Discover Products"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default InCart_Items;
