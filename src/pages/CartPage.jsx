import { Paper, Typography } from "@mui/material";
import InCart_Items from "../components/InCart_Items";

const CartPage = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Typography variant="h6" color="#ed6c02" gutterBottom>
        Items Added
      </Typography>
      <InCart_Items />
    </Paper>
  );
};

export default CartPage;
