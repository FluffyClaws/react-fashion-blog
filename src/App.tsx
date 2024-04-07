import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import ContentPage from "./pages/ContentPage";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/content/:type/:id" element={<ContentPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
