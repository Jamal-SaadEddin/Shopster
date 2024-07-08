import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import APP_LOGO from "../assets/shopster-favicon-white.png";
import { useCart } from "../contexts/CartContext";
import { useProductsDispatch } from "../contexts/ProductsContext";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const productsDispatch = useProductsDispatch();
  const cart = useCart();
  const cartItemsCount = cart.reduce((acc, item) => (acc += item.count), 0);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSearch = (query) => {
    productsDispatch({ type: "filter", query: query });
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
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

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          px: { xs: 2, md: 10, lg: 15, xl: 35 },
          top: 0,
          zIndex: 1000,
        }}
      >
        <Toolbar style={{ padding: 0 }}>
          <Link
            to="/Shopster/"
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: 30,
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <img src={APP_LOGO} alt="Shopster-Logo" className="nav-logo" />
            <Typography
              variant="h6"
              fontFamily="Electrolize"
              fontWeight={500}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              SHOPSTER
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Link
              to="/Shopster/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="body1">Store</Typography>
            </Link>
            <Link
              to="/Shopster/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="body1">About</Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <SearchInput onSearch={handleSearch} />
          <Link
            to="/Shopster/cart"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton
              size="large"
              aria-label="open shopping cart"
              color="inherit"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default Navbar;
