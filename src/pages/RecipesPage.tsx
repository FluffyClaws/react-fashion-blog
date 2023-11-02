import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Grid, Container, Box } from "@mui/material";
import RecipePost from "../components/Main/RecipePost";
import LeftBar from "../components/Main/LeftBar";
import PageNavigation from "../components/Main/PageNavigation";
import { recipes as recipeData } from "../utils/recipeData";
import "./RecipesPage.scss";

const RecipesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledRecipes, setShuffledRecipes] = useState(recipeData);

  const recipesPerPage = 10; // Adjust as needed
  const totalPages = Math.ceil(shuffledRecipes.length / recipesPerPage);

  useEffect(() => {
    const shuffled = shuffleArray([...recipeData]);
    setShuffledRecipes(shuffled);
  }, [currentPage]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = shuffledRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Box className="recipes-content">
              {currentRecipes.map((recipe) => (
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

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
