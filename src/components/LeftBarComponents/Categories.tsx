import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "./Categories.scss";

const Categories: React.FC<{
  onCategoryChange: (category: string) => void;
  categoriesWithCount: { name: string; count: number }[];
}> = ({ onCategoryChange, categoriesWithCount }) => (
  <Box className="categories">
    <Typography className="left-bar-blocks" pt={2}>
      Categories
    </Typography>
    {categoriesWithCount.map(({ name, count }) => (
      <Link
        href="#"
        key={name}
        underline="none"
        onClick={(e) => {
          e.preventDefault();
          onCategoryChange(name);
        }}
      >
        <span>{name}</span> <span>({count})</span>
      </Link>
    ))}
  </Box>
);

export default Categories;
