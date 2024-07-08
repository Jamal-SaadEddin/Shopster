import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Badge, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const MobileMenu = ({
  mobileMoreAnchorEl,
  setMobileMoreAnchorEl,
  cartItemsCount,
  MOBILE_MENU_ID,
}) => {
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={MOBILE_MENU_ID}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/Shopster/" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <IconButton size="large" aria-label="open store" color="inherit">
            <StorefrontIcon />
          </IconButton>
          <p>Store Page</p>
        </MenuItem>
      </Link>
      <Link
        to="/Shopster/about"
        style={{ textDecoration: "none", color: "black" }}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="open shopping cart"
            color="inherit"
          >
            <InfoIcon />
          </IconButton>
          <p>About Us</p>
        </MenuItem>
      </Link>
      <Link
        to="/Shopster/cart"
        style={{ textDecoration: "none", color: "black" }}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="open shopping cart"
            color="inherit"
          >
            <Badge badgeContent={cartItemsCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Shopping Cart</p>
        </MenuItem>
      </Link>
    </Menu>
  );
};

export default MobileMenu;
