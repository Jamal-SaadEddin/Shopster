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
import pasta from "../assets/products/spaghettipasta.jpg";

const InCart_Items = () => {
  const navigate = useNavigate();

  return (
    <Grid container pt={2} gap={2}>
      <Grid item width="100%">
        <Stack direction="row" gap={5}>
          <Stack
            direction="row"
            columnGap={2}
            maxWidth={320}
            width="fit-content"
          >
            <img src={pasta} alt="pasta" width={85} />
            <Stack direction="column">
              <Typography variant="body1">Pasta</Typography>
              <Typography variant="caption">
                Durum wheat pasta that cooks to al dente perfection.
              </Typography>
              <Typography variant="body2" color="#ed6c02">
                $4.5
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column">
            <Typography variant="h6" color="#ed6c02">
              2 In Cart
            </Typography>
            <Typography variant="h6" color="#ed6c02">
              Price: $9.00
            </Typography>
            <Stack direction="row" width="fit-content">
              <IconButton aria-label="remove 1 item from cart" color="inherit">
                <RemoveIcon />
              </IconButton>
              <IconButton aria-label="add 1 item to cart" color="inherit">
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction="column" justifyContent="center">
            <Button variant="contained" color="error">
              Remove from cart
            </Button>
          </Stack>
        </Stack>
        <Divider />
      </Grid>
      <Grid item width="100%">
        <Stack direction="row" gap={5}>
          <Stack
            direction="row"
            columnGap={2}
            maxWidth={320}
            width="fit-content"
          >
            <img src={pasta} alt="pasta" width={85} />
            <Stack direction="column">
              <Typography variant="body1">Pasta</Typography>
              <Typography variant="caption">
                Durum wheat pasta that cooks to al dente perfection.
              </Typography>
              <Typography variant="body2" color="#ed6c02">
                $4.5
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column">
            <Typography variant="h6" color="#ed6c02">
              2 In Cart
            </Typography>
            <Typography variant="h6" color="#ed6c02">
              Price: $9.00
            </Typography>
            <Stack direction="row" width="fit-content">
              <IconButton aria-label="remove 1 item from cart" color="inherit">
                <RemoveIcon />
              </IconButton>
              <IconButton aria-label="add 1 item to cart" color="inherit">
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction="column" justifyContent="center">
            <Button variant="contained" color="error">
              Remove from cart
            </Button>
          </Stack>
        </Stack>
        <Divider />
      </Grid>
      <Grid item width="100%">
        <Stack direction="row" gap={5}>
          <Stack
            direction="row"
            columnGap={2}
            maxWidth={320}
            width="fit-content"
          >
            <img src={pasta} alt="pasta" width={85} />
            <Stack direction="column">
              <Typography variant="body1">Pasta</Typography>
              <Typography variant="caption">
                Durum wheat pasta that cooks to al dente perfection.
              </Typography>
              <Typography variant="body2" color="#ed6c02">
                $4.5
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column">
            <Typography variant="h6" color="#ed6c02">
              2 In Cart
            </Typography>
            <Typography variant="h6" color="#ed6c02">
              Price: $9.00
            </Typography>
            <Stack direction="row" width="fit-content">
              <IconButton aria-label="remove 1 item from cart" color="inherit">
                <RemoveIcon />
              </IconButton>
              <IconButton aria-label="add 1 item to cart" color="inherit">
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction="column" justifyContent="center">
            <Button variant="contained" color="error">
              Remove from cart
            </Button>
          </Stack>
        </Stack>
        <Divider />
      </Grid>
      <Grid item width="100%">
        <Typography variant="h5" color="#ed6c02">
          Total Amount: $27.00
        </Typography>
      </Grid>
      <Grid item width="100%">
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/checkout")}
        >
          Go to checkout
        </Button>
      </Grid>
    </Grid>
  );
};

export default InCart_Items;
