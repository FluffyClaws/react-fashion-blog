import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Grid, Container, Box } from "@mui/material";
import LeftBar from "../components/Main/LeftBar";
import BottomMenu from "../components/Main/BottomMenu";
import BottomSocial from "../components/Main/BottomSocial";
import PageNavigation from "../components/Main/PageNavigation";
import Posts from "../components/Main/Posts";

const ArticlePage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Box className="articles-content">
              <Posts />
            </Box>
            <PageNavigation />
          </Grid>
          <Grid item xs={12} md={3}>
            <LeftBar />
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
