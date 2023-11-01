import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";
import "./AuthorSection.scss";

const AuthorSection: React.FC = () => (
  <Box className="author">
    <Paper elevation={0} className="left-bar-blocks">
      About the Author
    </Paper>
    <Box className="shadow">
      <Box className="author-pic"></Box>
      <Box className="author-info">
        <Typography className="author-name">Kate Willems</Typography>
        <Typography className="author-occup">Food & cooking blogger</Typography>
        <Typography className="author-bio">
          Hi, I'm Sonia. Cooking is the way I express my creative side to the
          world. Welcome to my Kitchen Corner on…
        </Typography>
      </Box>
      <Box className="more-author">
        <Link href="#">CONTINUE READING</Link>
      </Box>
    </Box>
  </Box>
);

export default AuthorSection;
