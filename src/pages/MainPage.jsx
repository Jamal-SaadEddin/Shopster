import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import APP_LOGO from "../assets/shopster-high-resolution-logo-transparent.png";

const MainPage = () => {
  return (
    <Box
      sx={{ px: { xs: 2, md: 10, lg: 15, xl: 35 } }}
      display="flex"
      flexDirection="column"
      rowGap={5}
    >
      <Box mt={5}>
        <img src={APP_LOGO} alt="Shopster-logo" width={145} />
      </Box>
      <Outlet />
    </Box>
  );
};

export default MainPage;
