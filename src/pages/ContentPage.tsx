import React from "react";
import { useParams } from "react-router-dom";
import { posts as postData } from "../utils/postData";
import { recipes as recipeData } from "../utils/recipeData";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LeftBar from "../components/Main/LeftBar";
import BottomMenu from "../components/Main/BottomMenu";
import BottomSocial from "../components/Main/BottomSocial";
import CommentsSection from "../components/Main/CommentsSection";
import { Container, Grid, Box, Typography } from "@mui/material";
import "./ContentPage.scss";
import { Comment } from "../types/types";
import { commentsData } from "../utils/commentsData";

const ContentPage: React.FC = () => {
  let { type, id } = useParams<{ type: string; id: string }>();
  let contentItem;
  let comments: Comment[] = [];

  if (type === "post") {
    contentItem = postData.find((post) => post.id.toString() === id);
    if (contentItem) {
      comments = commentsData[`post-${contentItem.id}`] || [];
    }
  } else if (type === "recipe") {
    contentItem = recipeData.find((recipe) => recipe.id.toString() === id);
    if (contentItem) {
      comments = commentsData[`recipe-${contentItem.id}`] || [];
    }
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg" className="content-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Box className="content-page">
              {contentItem ? (
                <>
                  <article>
                    <Typography
                      variant="h4"
                      gutterBottom
                      className="content-title"
                    >
                      {contentItem.title}
                    </Typography>
                    <Typography paragraph className="content-description">
                      {contentItem.content}
                    </Typography>
                  </article>
                  <CommentsSection comments={comments} />
                </>
              ) : (
                <Typography paragraph className="content-description">
                  Content not found.
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <LeftBar
              showAuthor={true}
              showCategories={false}
              showSocialLinks={true}
              posts={postData}
              categoriesWithCount={[]}
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

export default ContentPage;
