import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box className="menu">
      <IconButton
        className="menu-icon"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleToggle}
      >
        <MenuIcon />
      </IconButton>
      <Box className={`menu-items ${open ? "open" : ""}`}>
        <Typography component={Link} to="/" variant="body1">
          Home
        </Typography>
        <Typography component={Link} to="/recipes" variant="body1">
          Recipes
        </Typography>
        <Typography component={Link} to="/article" variant="body1">
          Article
        </Typography>
        <Typography component={Link} to="/contact" variant="body1">
          Contact
        </Typography>
      </Box>
    </Box>
  );
};

export default Menu;
