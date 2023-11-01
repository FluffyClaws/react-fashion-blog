import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "./Categories.scss";

const Categories: React.FC = () => (
  <Box className="categories">
    <Typography className="left-bar-blocks" pt={2}>
      Categories
    </Typography>
    {[
      "Fashion (23)",
      "Style & clothes (7)",
      "Minimalism (16)",
      "Black & White (5)",
      "Modern clothes (12)",
    ].map((category) => (
      <Link href="" key={category} underline="none">
        {category}
      </Link>
    ))}
  </Box>
);

export default Categories;
