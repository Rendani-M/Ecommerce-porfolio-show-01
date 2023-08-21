import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { MoreVert } from "@mui/icons-material";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // define media queries for different devices
  const isXSMobileDevice = useMediaQuery({ query: "(max-width: 480px)" });
  const isMobileDevice = useMediaQuery({ query: "(max-width: 680px)" });
  const isTabletDevice = useMediaQuery({ query: "(min-width: 930px)" });

  return (
    <div className="navbar">
      {isXSMobileDevice && (<Box className="smallmenu">
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MoreVert style={{ color:'white' }}/>
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>
            <div className="item" style={{ cursor: 'pointer' }}>
              <Link className="link" to="/products/1" style={{ textDecoration:'none', color:'black' }}>
                <Typography variant="subtitle1">Women</Typography>
              </Link>
            </div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <div className="item" style={{ cursor: 'pointer' }}>
              <Link className="link" to="/products/2" style={{ textDecoration:'none', color:'black' }}>
                <Typography variant="subtitle1">Men</Typography>
              </Link>
            </div>
          </MenuItem>
        </Menu>
      </Box>)}
      <div className="wrapper">
        <Box className="left" sx={{ display: { sm: "none", md: "block" } }}>
          <div className="item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/800px-Flag_of_South_Africa.svg.png?20221218180510"
              alt=""
            />
          </div>
          <div className="item">
            <Typography variant="subtitle1">RSA</Typography>
          </div>
          {!isXSMobileDevice && 
            (<>
              <Box className="item" style={{ cursor: 'pointer' }}>
                <Link className="link" to="/products/1">
                  <Typography variant="subtitle1">Women</Typography>
                </Link>
              </Box>
              <Box className="item" style={{ cursor: 'pointer' }}>
                <Link className="link" to="/products/2">
                  <Typography variant="subtitle1">Men</Typography>
                </Link>
              </Box>
            </>
          )}
        </Box>
        <div className="center">
          <Link className="link" to="/">
            <Typography variant={isMobileDevice ? "h5" : "h4"}>
              RENDI-STORE
            </Typography>
          </Link>
        </div>
        <Box className="right">
          {isTabletDevice && (
            <>
              <Box className="item" sx={{ display: { sm: "none", md: "block" }, cursor: 'pointer' }}>
                <Link className="link" to="/">
                  <Typography variant="subtitle1">Homepage</Typography>
                </Link>
              </Box>
              <Box
                className="item"
                sx={{ display: { sm: "none", md: "block", cursor: 'pointer' } }}
              >
                <Link className="link" to="/">
                  <Typography variant="subtitle1">About</Typography>
                </Link>
              </Box>
              <Box
                className="item"
                sx={{ display: { sm: "none", md: "block", cursor: 'pointer' } }}
                onClick={() => alert("This feature is just for display")}
              >
                  <Typography variant="subtitle1">Contact</Typography>
              </Box>
            </>
          )}
          <div className="icons">
            {!isMobileDevice && (
              <>
              <SearchIcon sx={{ cursor: 'pointer' }} onClick={() => alert("This feature is just for display")}/>
              <PersonOutlineOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => alert("This feature is just for display")}/>
              <FavoriteBorderOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => alert("This feature is just for display")}/>
              </>
            )}
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </Box>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
