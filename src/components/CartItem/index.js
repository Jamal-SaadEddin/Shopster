import { Divider, Grid, Stack } from "@mui/material";
import ItemActions from "./ItemActions";
import ItemContent from "./ItemContent";

const CartItem = ({ item, brief }) => {
  const itemStackDirection = !brief
    ? { xs: "column", md: "row" }
    : { xs: "column", sm: "row" };

  return (
    <Grid item width="100%" key={item.id}>
      <Stack direction={itemStackDirection} gap={{ xs: 1, md: 5 }}>
        <ItemContent item={item} />
        <ItemActions item={item} brief={brief} />
      </Stack>
      <Divider sx={{ mt: { xs: 3, md: 0 } }} />
    </Grid>
  );
};

export default CartItem;
