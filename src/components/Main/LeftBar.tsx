import React from "react";
import { Box, Paper } from "@mui/material";
import AuthorSection from "../LeftBarComponents/AuthorSection";
import FeaturedPost from "../LeftBarComponents/FeaturedPost";
import SocialLink from "../LeftBarComponents/SocialLink";
import Tag from "../LeftBarComponents/Tag";
import Categories from "../LeftBarComponents/Categories";
import "./LeftBar.scss";
import { LeftBarProps } from "../../types/types";

const LeftBar: React.FC<LeftBarProps> = ({
  showAuthor = true,
  showFeatured = true,
  showCategories = true,
  showSocialLinks = true,
  showTags = true,
}) => (
  <Box className="left-bar">
    {showAuthor && <AuthorSection />}
    {showFeatured && (
      <Box className="feat-left">
        <Paper elevation={0} className="left-bar-blocks">
          Featured posts
        </Paper>
        <FeaturedPost picClass="pic1" />
        <FeaturedPost picClass="pic2" />
        <FeaturedPost picClass="pic3" />
      </Box>
    )}
    {showCategories && <Categories />}
    {showSocialLinks && (
      <Box className="social-links">
        <Paper elevation={0} className="left-bar-blocks">
          Social media
        </Paper>
        <SocialLink className="fb" count={32} label="likes" />
        <SocialLink className="pinterest" count={814} label="followers" />
        <SocialLink className="vine" count={165} label="followers" />
        <SocialLink className="ball" count={6} label="followers" />
        <SocialLink className="twitter" count={130} label="followers" />
        <SocialLink className="be" count={37} label="followers" />
        <SocialLink className="instagram" count={854} label="followers" />
        <SocialLink className="youtube" count={52} label="subscribers" />
        <SocialLink className="gplus" count={642} label="followers" />
      </Box>
    )}
    {showTags && <Tag />}
  </Box>
);

export default LeftBar;
