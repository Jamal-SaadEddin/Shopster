import InfoIcon from "@mui/icons-material/Info";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import { Link } from "react-router-dom";
import APP_LOGO from "../assets/shopster-favicon-white.png";
import { useCart } from "../contexts/CartContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
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
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <IconButton size="large" aria-label="open store" color="inherit">
            <StorefrontIcon />
          </IconButton>
          <p>Store Page</p>
        </MenuItem>
      </Link>
      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
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
      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="open shopping cart"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
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
            to="/"
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
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="body1">Store</Typography>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography variant="body1">About</Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search product…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
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
