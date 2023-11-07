import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { posts } from "../../utils/postData";
import "./Banner.scss";

const Banner: React.FC = () => {
  const bannerPost = posts.find((post) => post.banner === true);
  if (!bannerPost) {
    return null;
  }
  const { category, title, author, date, id } = bannerPost;

  return (
    <Box className="bigB">
      <Box className="gradient"></Box>
      <Box className="container">
        <Box className="col-12">
          <Box className="bigB-text">
            <Typography className="cat">{category}</Typography>
            <Link to={`/content/post/${id}`} className="headline">
              {title}
            </Link>
            <Box className="bigB-wrapper">
              <Typography component="span">{date}</Typography>
              <Typography component="span">{author}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
