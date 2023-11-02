import React from "react";
import { Box, Button } from "@mui/material";
import "./PageNavigation.scss";
import { PageNavigationProps } from "../../types/types";

const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Box className="page-nav-wrapper">
      <Box className="page-nav-box">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          PREV PAGE
        </Button>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          NEXT PAGE
        </Button>
      </Box>
    </Box>
  );
};

export default PageNavigation;
