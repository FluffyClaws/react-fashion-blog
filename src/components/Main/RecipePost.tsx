import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Recipe } from "../../types/types";
import "./RecipePost.scss";
import { Link } from "react-router-dom";

const RecipePost: React.FC<Recipe> = ({
  id,
  category,
  title,
  author,
  date,
  preview,
}) => {
  return (
    <Paper elevation={3} className="recipe-post">
      <Box className="recipe-post-info">
        <Typography className="post-cat">{category}</Typography>
        <Link to={`/content/recipe/${id}`}>
          <Typography className="recipe-main-head">{title}</Typography>
        </Link>
        <Typography className="recipe-post-main-cont">{preview}</Typography>
        <Box className="recipe-main-addinfo-wrapper">
          <Typography>{date}</Typography>
          <Typography>{author}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RecipePost;
