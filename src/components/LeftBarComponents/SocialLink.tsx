import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "./SocialLink.scss";

const SocialLink: React.FC<{
  className: string;
  count: number;
  label: string;
}> = ({ className, count, label }) => (
  <Link href="" underline="none">
    <Box
      className={`social social-info ${className}`}
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={5}
    >
      <Typography variant="body2">{count}</Typography>
      <Typography variant="body2">{label}</Typography>
    </Box>
  </Link>
);

export default SocialLink;
