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
import Posts from "../components/Main/Posts";
import { Post } from "../types/types";
import { posts as postData } from "../utils/postData";
import usePagination from "../utils/usePagination";

const HomePage: React.FC = () => {
  const postsPerPage = 10;
  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination<Post>(postData, postsPerPage);

  return (
    <>
      <Header />
      <Banner />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Posts posts={paginatedData} />
            <PageNavigation
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <LeftBar />
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
