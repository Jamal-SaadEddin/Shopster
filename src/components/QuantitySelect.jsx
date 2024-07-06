import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const QuantityOptions = ({ optionsCount, quantity, onSelectQuantity }) => {
  const menuItems = [];

  for (let i = 1; i <= optionsCount; i++) {
    menuItems.push(
      <MenuItem value={i} key={i}>
        {i}
      </MenuItem>
    );
  }

  return (
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
  );
};

const QuantitySelect = ({ quantity, onSelectQuantity }) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
      <InputLabel id="quantity">Quantity</InputLabel>
      <QuantityOptions
        optionsCount={30}
        quantity={quantity}
        onSelectQuantity={onSelectQuantity}
      />
    </FormControl>
  );
};

export default QuantitySelect;
