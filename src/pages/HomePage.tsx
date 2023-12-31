import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Container, Grid } from "@mui/material";
import Banner from "../components/Main/Banner";
import BottomMenu from "../components/Main/BottomMenu";
import BottomSocial from "../components/Main/BottomSocial";
import InstagramSection from "../components/Main/InstagramSection";
import LeftBar from "../components/Main/LeftBar";
import PageNavigation from "../components/Main/PageNavigation";
import { Post } from "../types/types";
import { posts as postData, posts } from "../utils/postData";
import usePagination from "../hooks/usePagination";
import useCategoryFilter from "../hooks/useCategoryFilter";
import PostList from "../components/PostList/PostList";
import "./HomePage.scss";

const HomePage: React.FC = () => {
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
      <Banner />
      <Container className="main-container" maxWidth="lg">
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} sm={8} md={9}>
            <PostList posts={paginatedData} />
            <PageNavigation
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <LeftBar
              onCategoryChange={handleCategoryChange}
              posts={posts}
              categoriesWithCount={categoryCounts}
            />
          </Grid>
        </Grid>
      </Container>
      <InstagramSection />
      <BottomMenu />
      <BottomSocial />
      <Footer />
    </>
  );
};

export default HomePage;
