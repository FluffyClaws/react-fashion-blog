import React from "react";
import { Box, Link } from "@mui/material";
import "./Banner.scss";

const Banner: React.FC = () => {
  return (
    <Box className="bigB">
      <Box className="gradient"></Box>
      <Box className="container">
        <Box className="col-12">
          <Box className="bigB-text">
            <Link href="#" className="cat">
              Vehicle
            </Link>
            <Link href="#" className="headline">
              One of Saturn’s largest rings <br /> may be newer than anyone
            </Link>
            <Box className="bigB-wrapper">
              <Link href="#">June 6, 2019</Link>
              <Link href="#">Rickie Baroch</Link>
              <Link href="#">4 comments</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
