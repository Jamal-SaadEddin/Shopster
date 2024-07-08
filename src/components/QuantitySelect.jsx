import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const OPTIONS_COUNT = 30;

const QuantitySelect = ({ quantity, onSelectQuantity }) => {
  const menuItems = [...Array(OPTIONS_COUNT)].map((_, i) => (
    <MenuItem value={i + 1} key={i + 1}>
      {i + 1}
    </MenuItem>
  ));

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
      <InputLabel id="quantity">Quantity</InputLabel>
      <Select
        labelId="quantity"
        id="quantity-select"
        value={quantity}
        onChange={(e) => onSelectQuantity(e.target.value)}
        label="Quantity"
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,
            },
          },
        }}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default QuantitySelect;
