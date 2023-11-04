import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { posts } from "../../utils/postData";
import "./Banner.scss";

const Banner: React.FC = () => {
  const bannerPost = posts.find((post) => post.banner === true);
  if (!bannerPost) {
    return null;
  }
  const { category, title, author, date } = bannerPost;

  return (
    <Box className="bigB">
      <Box className="gradient"></Box>
      <Box className="container">
        <Box className="col-12">
          <Box className="bigB-text">
            <Link href="#" className="cat">
              {category}
            </Link>
            <Link href="#" className="headline">
              {title}
            </Link>
            <Box className="bigB-wrapper">
              <Typography>{date}</Typography>
              <Link href="#">{author}</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
