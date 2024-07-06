import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const QuantityOptions = ({ optionsCount }) => {
  const [quantity, setQuantity] = useState(1);
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
      onChange={(e) => setQuantity(e.target.value)}
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

const QuantitySelect = () => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
      <InputLabel id="quantity">Quantity</InputLabel>
      <QuantityOptions optionsCount={30} />
    </FormControl>
  );
};

export default QuantitySelect;
