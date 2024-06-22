import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
        height="220"
        image={product.imageUrl}
        sx={{
          objectFit: "contain",
          boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="#ED6C01">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="warning" fullWidth>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
