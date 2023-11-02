import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import ArticlePage from "./pages/ArticlePage";
import PurchasePage from "./pages/PurchasePage";
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
