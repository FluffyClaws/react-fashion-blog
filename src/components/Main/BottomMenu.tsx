import React from "react";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "./BottomMenu.scss";

const BottomMenu: React.FC = () => {
  return (
    <Box>
      <Box className="logo-bottom">
        <Link to="/" className="logo-link">
          Fashion
        </Link>
        <Divider className="rectangle-bottom" orientation="horizontal" />
      </Box>
      <Box className="bottom-menu-wrapper">
        <Box className="bottom-menu">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/recipes" className="menu-item">
            Recipes
          </Link>
          <Link to="/article" className="menu-item">
            Article
          </Link>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BottomMenu;
