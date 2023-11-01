import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";
import "./FeaturedPost.scss";

const FeaturedPost: React.FC<{ picClass: string }> = ({ picClass }) => (
  <Paper elevation={3} className="shadow">
    <Box className={`feat-left-post ${picClass}`}></Box>
    <Box className="feat-left-post-info">
      <Typography className="post-cat" align="center">
        <Link href="">Clothes</Link>
      </Typography>
      <Typography className="feat-head" align="center">
        <Link href="">
          One of Saturn’s largest rings may be newer than anyone
        </Link>
      </Typography>
      <Box className="addinfo-wrapper">
        <Typography className="post-addinfo">
          <Link href="">June 6, 2019</Link>
          <Link href="">Rickie Baroch</Link>
        </Typography>
      </Box>
    </Box>
  </Paper>
);

export default FeaturedPost;
