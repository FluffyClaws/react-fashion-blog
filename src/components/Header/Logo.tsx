import React from "react";
import { Box, Typography } from "@mui/material";
import "./Logo.scss";

const Logo: React.FC = () => {
  return (
    <Box className="logo">
      <Typography component="a" href="#" variant="h5">
        FASHION
      </Typography>
      <Box className="rectangle"></Box>
    </Box>
  );
};

export default Logo;
