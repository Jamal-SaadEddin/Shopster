import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <Grid container spacing={{ xs: 3, md: 4, lg: 5, xl: 7 }}>
      {products.map((product) => (
        <Grid
          key={product.id}
          item
          sx={{
            width: { xs: "100%", sm: "50%", md: "33.333333%" },
            maxWidth: "100%",
          }}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
