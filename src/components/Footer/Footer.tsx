import React from "react";
import { Box, Typography } from "@mui/material";
import "./Footer.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className="footer">
      <Box className="foot-wrapper">
        <Box className="foot-container">
          <Typography variant="body1">
            &copy; {currentYear} Logwork. All Right Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
