import React from "react";
import "./Categories.scss";

const Categories: React.FC = () => (
  <div className="categories">
    <div className="left-bar-blocks">Categories</div>
    {[
      "Fashion (23)",
      "Style & clothes (7)",
      "Minimalism (16)",
      "Black & White (5)",
      "Modern clothes (12)",
    ].map((category) => (
      <a href="" key={category}>
        {category}
      </a>
    ))}
  </div>
);

export default Categories;
