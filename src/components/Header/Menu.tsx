import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <Box className="menu">
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
  );
};

export default Menu;
