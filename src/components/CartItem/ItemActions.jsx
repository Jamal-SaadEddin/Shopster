import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { useCartDispatch } from "../../contexts/CartContext";

const ItemActions = ({ item, brief }) => {
  const cartDispatch = useCartDispatch();

  return (
    <>
      <Stack direction="column">
        <Typography variant="h6" color="#ed6c02">
          {item.count} In Cart
        </Typography>
        <Typography variant="h6" color="#ed6c02">
          Price: ${(item.price * item.count).toFixed(2)}
        </Typography>
        {!brief && (
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
              onClick={() => cartDispatch({ type: "add", ...item, count: 1 })}
            >
              <AddIcon />
            </IconButton>
          </Stack>
        )}
      </Stack>
      {!brief && (
        <Stack
          direction="column"
          justifyContent={{ xs: "start", md: "center" }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={() => cartDispatch({ type: "removeItemAll", id: item.id })}
          >
            Remove from cart
          </Button>
        </Stack>
      )}
    </>
  );
};

export default ItemActions;
