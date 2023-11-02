import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Recipe } from "../../types/types";
import "./RecipePost.scss";

const RecipePost: React.FC<Recipe> = ({
  id,
  category,
  title,
  author,
  date,
  content,
}) => {
  return (
    <Paper elevation={3} className="recipe-post">
      <Box className="recipe-post-info">
        <Typography className="post-cat">{category}</Typography>
        <Typography className="recipe-main-head">{title}</Typography>
        <Typography className="recipe-post-main-cont">{content}</Typography>
        <Box className="recipe-main-addinfo-wrapper">
          <Typography>{date}</Typography>
          <Typography>{author}</Typography>
          <Typography>4 comments</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RecipePost;
