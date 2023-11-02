import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Grid, Container, Box } from "@mui/material";
import RecipePost from "../components/Main/RecipePost";
import LeftBar from "../components/Main/LeftBar";
import PageNavigation from "../components/Main/PageNavigation";
import { recipes as recipeData } from "../utils/recipeData";
import "./RecipesPage.scss";
import usePagination from "../utils/usePagination";

const RecipesPage: React.FC = () => {
  const recipesPerPage = 10;
  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination(recipeData, recipesPerPage);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Box className="recipes-content">
              {paginatedData.map((recipe) => (
                <RecipePost key={recipe.id} {...recipe} />
              ))}
            </Box>
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
      <Footer />
    </>
  );
};

export default RecipesPage;
