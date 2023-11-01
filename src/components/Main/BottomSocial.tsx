import React from "react";
import { Box, Link, IconButton } from "@mui/material";
import "./BottomSocial.scss";

const BottomSocial: React.FC = () => {
  return (
    <Box className="bottom-social-wrapper">
      <Box className="bottom-social">
        <Link href="#">
          <IconButton className="social-circle fb" aria-label="Facebook" />
        </Link>
        <Link href="#">
          <IconButton
            className="social-circle twitter-white"
            aria-label="Twitter"
          />
        </Link>
        <Link href="#">
          <IconButton
            className="social-circle pinterest"
            aria-label="Pinterest"
          />
        </Link>
        <Link href="#">
          <IconButton
            className="social-circle gplus-circle"
            aria-label="Google Plus"
          />
        </Link>
        <Link href="#">
          <IconButton className="social-circle be" aria-label="Behance" />
        </Link>
        <Link href="#">
          <IconButton
            className="social-circle instagram-circle"
            aria-label="Instagram"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default BottomSocial;
