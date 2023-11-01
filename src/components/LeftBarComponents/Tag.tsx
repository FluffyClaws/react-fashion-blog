import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "./Tag.scss";

const tagsList = [
  "Business",
  "Freelance",
  "Money",
  "Experience",
  "Lifestyle",
  "SEO",
  "Wordpress",
  "Marketing",
  "UX",
  "Modern",
  "Success",
  "Nature",
];

const Tag: React.FC = () => (
  <Box className="tags-wrapper">
    <Box className="left-bar-blocks">Tags</Box>
    {tagsList.map((tag) => (
      <Box key={tag} className="tags">
        <Link href="#" underline="none" className="tag-link">
          <Typography variant="body2">{tag}</Typography>
        </Link>
      </Box>
    ))}
  </Box>
);

export default Tag;
