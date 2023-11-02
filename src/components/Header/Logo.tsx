import React from "react";
import { Box, Typography } from "@mui/material";
import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Box className="logo">
      <Typography component={Link} to="/" variant="body1">
        FASHION
      </Typography>
      <Box className="rectangle"></Box>
    </Box>
  );
};

export default Logo;
