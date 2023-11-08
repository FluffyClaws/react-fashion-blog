import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./PostItem.scss";
import { Post } from "../../types/types";

const PostItem: React.FC<Post & { isFeatured: boolean }> = ({
  id,
  imageUrl,
  category,
  title,
  author,
  date,
  preview,
  isFeatured,
}) => (
  <Paper elevation={3} className={` ${isFeatured ? "feat-post" : "post"}`}>
    <Box
      className={`${isFeatured ? "feat-post-main-image" : "post-image"}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <Box className={`${isFeatured ? "feat-post-info" : "post-info"}`}>
      <Typography className={`${isFeatured ? "feat-post-cat" : "post-cat"}`}>
        {category}
      </Typography>

      <Link
        to={`/content/post/${id}`}
        className={`${isFeatured ? "feat-main-head" : "post-head"}`}
      >
        {title}
      </Link>

      <Box
        className={`${
          isFeatured ? "feat-main-addinfo-wrapper" : "addinfo-wrapper"
        }`}
      >
        <Typography>{author}</Typography>
        <Typography>{date}</Typography>
      </Box>

      {isFeatured && preview && (
        <Typography className="feat-post-preview">{preview}</Typography>
      )}
    </Box>
  </Paper>
);

export default PostItem;
