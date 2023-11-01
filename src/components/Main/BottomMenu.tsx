import React from "react";
import { Box, Link, Divider } from "@mui/material";
import "./BottomMenu.scss";

const BottomMenu: React.FC = () => {
  return (
    <Box>
      <Box className="logo-bottom">
        <Link href="#" underline="none">
          Fashion
        </Link>
        <Divider className="rectangle-bottom" orientation="horizontal" />
      </Box>
      <Box className="bottom-menu-wrapper">
        <Box className="bottom-menu">
          <Link href="#" underline="none">
            Home
          </Link>
          <Link href="#" underline="none">
            Recipes
          </Link>
          <Link href="#" underline="none">
            Article
          </Link>
          <Link href="#" underline="none">
            Contact
          </Link>
          <Link href="#" underline="none">
            Purchase
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BottomMenu;
