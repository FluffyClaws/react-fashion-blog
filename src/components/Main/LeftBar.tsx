import React from "react";
import { Box, Paper } from "@mui/material";
import AuthorSection from "../LeftBarComponents/AuthorSection";
import SocialLink from "../LeftBarComponents/SocialLink";
import Categories from "../LeftBarComponents/Categories";
import "./LeftBar.scss";
import { LeftBarProps, Post } from "../../types/types";
import useCategoryFilter from "../../hooks/useCategoryFilter";

const LeftBar: React.FC<
  LeftBarProps & {
    posts: Post[];
    categoriesWithCount: { name: string; count: number }[];
  }
> = ({
  showAuthor = true,
  showCategories = true,
  onCategoryChange,
  showSocialLinks = true,
  posts,
  categoriesWithCount,
}) => {
  const { handleCategoryChange } = useCategoryFilter<Post>(
    "All",
    categoriesWithCount.map((c) => c.name),
    posts
  );

  const handleCategorySelect = (category: string) => {
    handleCategoryChange(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <Box className="left-bar">
      {showAuthor && <AuthorSection />}
      {showCategories && (
        <Categories
          onCategoryChange={handleCategorySelect}
          categoriesWithCount={categoriesWithCount}
        />
      )}
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
    </Box>
  );
};

export default LeftBar;
