import React from "react";
import { Box, Typography, Link, Paper } from "@mui/material";
import "./PostItem.scss";
import { Post } from "../../types/types";

const PostItem: React.FC<Post & { isFeatured: boolean }> = ({
  imageUrl,
  category,
  title,
  author,
  date,
  content,
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
      <Typography
        className={`${isFeatured ? "feat-main-head" : "post-head"}`}
        component={Link}
        href="#"
      >
        {title}
      </Typography>
      <Box
        className={`${
          isFeatured ? "feat-main-addinfo-wrapper" : "addinfo-wrapper"
        }`}
      >
        <Typography component={Link} href="#">
          {author}
        </Typography>
        <Typography>{date}</Typography>
        {isFeatured && (
          <Typography component={Link} href="#">
            4 comments
          </Typography>
        )}
      </Box>
      {isFeatured && content && (
        <Typography className="feat-post-content">{content}</Typography>
      )}
    </Box>
  </Paper>
);

export default PostItem;
