import React from "react";
import { Box, Link, Typography } from "@mui/material";
import "./PageNavigation.scss";

const PageNavigation: React.FC = () => {
  return (
    <Box className="page-nav-wrapper">
      <Box className="page-nav-box">
        <Link href="#" underline="none" className="prev-page">
          PREV PAGE
        </Link>
        {[1, 2, 3, "...", 8].map((pageNum) => (
          <Link href="#" key={pageNum} underline="none" className="page-num">
            <Typography variant="body1">{pageNum}</Typography>
          </Link>
        ))}
        <Link href="#" underline="none" className="next-page">
          NEXT PAGE
          <Box className="arrow-next" />
        </Link>
      </Box>
    </Box>
  );
};

export default PageNavigation;
