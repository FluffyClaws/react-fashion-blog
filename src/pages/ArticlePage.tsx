import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Grid, Container, Box } from "@mui/material";
import LeftBar from "../components/Main/LeftBar";
import BottomMenu from "../components/Main/BottomMenu";
import BottomSocial from "../components/Main/BottomSocial";
import PageNavigation from "../components/Main/PageNavigation";
import Posts from "../components/Main/Posts";
import usePagination from "../utils/usePagination";
import { Post } from "../types/types";
import { posts as postData, posts } from "../utils/postData";
import {
  createFilterCondition,
  handleCategoryChange,
} from "../utils/postUtils";

const ArticlePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const postsPerPage = 10;

  const filterCondition = createFilterCondition(selectedCategory);

  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination<Post>(postData, postsPerPage, filterCondition);

  const onCategoryChange = handleCategoryChange(
    setSelectedCategory,
    setCurrentPage
  );

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Box className="articles-content">
              <Posts posts={paginatedData} />
            </Box>
            <PageNavigation
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <LeftBar
              showAuthor={false}
              showFeatured={true}
              showCategories={true}
              showSocialLinks={false}
              showTags={true}
              onCategoryChange={onCategoryChange}
              posts={posts}
            />
          </Grid>
        </Grid>
      </Container>
      <BottomMenu />
      <BottomSocial />
      <Footer />
    </>
  );
};

export default ArticlePage;
