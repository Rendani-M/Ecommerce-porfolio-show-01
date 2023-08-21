import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box className="contact">
      <Box className="wrapper" sx={{ justifyContent:{xs:'space-between', sm:'space-between', md:'center'}}}>
        <Typography component="span" sx={{ display:{xs:'none', sm:'block'} }}>BE IN TOUCH WITH US:</Typography>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </Box>
    </Box>
  );
};

export default Contact;
