import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Grid, Container, Box } from "@mui/material";
import RecipePost from "../components/Main/RecipePost";
import LeftBar from "../components/Main/LeftBar";
import PageNavigation from "../components/Main/PageNavigation";
import { recipes as recipeData } from "../utils/recipeData";
import "./RecipesPage.scss";
import usePagination from "../hooks/usePagination";
import useCategoryFilter from "../hooks/useCategoryFilter";
import { Recipe } from "../types/types";

const RecipesPage: React.FC = () => {
  const recipesPerPage = 10;

  const allCategories = [
    "All",
    ...Array.from(new Set(recipeData.map((recipe) => recipe.category))),
  ];
  const { handleCategoryChange, filteredItems, categoryCounts } =
    useCategoryFilter<Recipe>("All", allCategories, recipeData);

  const { currentPage, setCurrentPage, totalPages, paginatedData } =
    usePagination<Recipe>(filteredItems, recipesPerPage, () => true);

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
            <LeftBar
              showAuthor={true}
              showCategories={true}
              showSocialLinks={false}
              posts={[]}
              categoriesWithCount={categoryCounts}
              onCategoryChange={handleCategoryChange}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default RecipesPage;
