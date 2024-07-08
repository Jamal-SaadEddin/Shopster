import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CartItems from "../components/CartItems";
import { useCart } from "../contexts/CartContext";

const CheckoutPage = () => {
  const cart = useCart();
  const cartItemsCount = cart.reduce((acc, item) => (acc += item.count), 0);

  return (
    <Grid container spacing={2} direction={{ xs: "column-reverse", lg: "row" }}>
      <Grid item xs={12} lg={7}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Checkout
          </Typography>
          <Typography variant="h6" color="#ed6c02" gutterBottom>
            Billing Details
          </Typography>
          <Grid container columnSpacing={7} rowSpacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="first-name"
                label="First Name"
                variant="standard"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="last-name"
                label="Last Name"
                variant="standard"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email Address"
                variant="standard"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="postal-code"
                label="Postal Code"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="town-city"
                label="Town/City"
                variant="standard"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="country"
                label="Country"
                variant="standard"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                label="Phone Number"
                variant="standard"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                id="card-number"
                label="Card Number"
                variant="standard"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="security-code"
                label="Security Code"
                variant="standard"
                placeholder="3 digits"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} mt={3}>
              <Button variant="contained" fullWidth>
                Place Order
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Order Summary
          </Typography>
          <Typography variant="h6" color="#ed6c02" gutterBottom>
            {`Items Added (${cartItemsCount})`}
          </Typography>
          <CartItems WithoutActions />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CheckoutPage;
