import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Grid, Container, Box } from "@mui/material";
import LeftBar from "../components/Main/LeftBar";
import BottomMenu from "../components/Main/BottomMenu";
import BottomSocial from "../components/Main/BottomSocial";
import PageNavigation from "../components/Main/PageNavigation";
import usePagination from "../hooks/usePagination";
import { Post } from "../types/types";
import { posts as postData, posts } from "../utils/postData";

import useCategoryFilter from "../hooks/useCategoryFilter";
import PostList from "../components/PostList/PostList";

const ArticlePage: React.FC = () => {
  const postsPerPage = 10;

  const allCategories = [
    "All",
    ...Array.from(new Set(postData.map((post) => post.category))),
  ];

  const { handleCategoryChange, filteredItems, categoryCounts } =
    useCategoryFilter<Post>("All", allCategories, postData);

  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination<Post>(filteredItems, postsPerPage, () => true);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Box className="articles-content">
              <PostList posts={paginatedData} />
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
              showCategories={true}
              showSocialLinks={false}
              onCategoryChange={handleCategoryChange}
              categoriesWithCount={categoryCounts}
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
