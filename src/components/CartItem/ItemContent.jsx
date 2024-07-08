import { Stack, Typography } from "@mui/material";

const ItemContent = ({ item }) => {
  return (
    <Stack direction="row" columnGap={2} maxWidth={320} width="fit-content">
      <img src={item.imageUrl} alt={item.name} width={85} />
      <Stack direction="column">
        <Typography variant="body1">{item.name}</Typography>
        <Typography variant="caption">{item.description}</Typography>
        <Typography variant="body2" color="#ed6c02">
          ${item.price}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ItemContent;
