import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PASTA from "../assets/pasta.webp";

const Products = () => {
  return (
    <Grid container spacing={{ xs: 3, md: 4, lg: 5, xl: 7 }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
        <Grid
          key={value}
          item
          sx={{
            width: { xs: "100%", sm: "50%", md: "33.333333%" },
            maxWidth: "100%",
          }}
        >
          <Card>
            <CardMedia
              component="img"
              alt="pasta"
              height="220"
              image={PASTA}
              sx={{
                objectFit: "contain",
                boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pasta
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                Pasta 400g very delecios and healthy...etc
              </Typography>
              <Typography variant="h6" color="#ED6C01">
                $4.5
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="warning" fullWidth>
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
