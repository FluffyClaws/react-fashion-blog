import React from "react";
import Banner from "./Banner";
import Posts from "./Posts";
import PageNavigation from "./PageNavigation";
import LeftBar from "./LeftBar";
import InstagramSection from "./InstagramSection";
import BottomMenu from "./BottomMenu";
import BottomSocial from "./BottomSocial";
import { Grid, Container, Box } from "@mui/material";

const Main: React.FC = () => {
  return (
    <Box component="main">
      <Banner />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Posts />
            <PageNavigation />
          </Grid>
          <Grid item xs={12} md={3}>
            <LeftBar />
          </Grid>
        </Grid>
      </Container>
      <InstagramSection />
      <BottomMenu />
      <BottomSocial />
    </Box>
  );
};

export default Main;
