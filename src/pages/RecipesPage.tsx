import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { recipes } from "../utils/recipeData";
import { Grid, Container, Box } from "@mui/material";
import RecipePost from "../components/Main/RecipePost";
import LeftBar from "../components/Main/LeftBar";
import "./RecipesPage.scss";
import BottomMenu from "../components/Main/BottomMenu";
import BottomSocial from "../components/Main/BottomSocial";
import PageNavigation from "../components/Main/PageNavigation";

const RecipesPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Box className="recipes-content">
              {recipes.map((recipe) => (
                <RecipePost
                  key={recipe.id}
                  id={recipe.id}
                  category={recipe.category}
                  title={recipe.title}
                  author={recipe.author}
                  date={recipe.date}
                  content={recipe.content}
                />
              ))}
            </Box>
            <PageNavigation />
          </Grid>
          <Grid item xs={12} md={3}>
            <LeftBar
              showAuthor={true}
              showFeatured={false}
              showCategories={false}
              showSocialLinks={true}
              showTags={false}
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

export default RecipesPage;
