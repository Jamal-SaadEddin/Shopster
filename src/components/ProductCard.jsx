import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useCartDispatch } from "../contexts/CartContext";
import QuantitySelect from "./QuantitySelect";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState("1");
  const cartDispatch = useCartDispatch();

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
      <CardContent sx={{ pb: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="#ed6c02">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 0,
        }}
      >
        <QuantitySelect quantity={quantity} onSelectQuantity={setQuantity} />
        <Button
          variant="contained"
          fullWidth
          sx={{ ml: "0px !important" }}
          onClick={() =>
            cartDispatch({ type: "add", ...product, count: Number(quantity) })
          }
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
