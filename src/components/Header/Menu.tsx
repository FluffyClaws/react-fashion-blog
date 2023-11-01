import React from "react";
import { Box, Typography } from "@mui/material";
import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <Box className="menu">
      <Typography component="a" href="#" variant="body1">
        Home
      </Typography>
      <Typography component="a" href="#" variant="body1">
        Recipes
      </Typography>
      <Typography component="a" href="#" variant="body1">
        Article
      </Typography>
      <Typography component="a" href="#" variant="body1">
        Contact
      </Typography>
      <Typography component="a" href="#" variant="body1">
        Purchase
      </Typography>
    </Box>
  );
};

export default Menu;
