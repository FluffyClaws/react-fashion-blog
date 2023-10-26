import React from "react";
import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <a href="#">Home</a>
      <a href="#">Recipes</a>
      <a href="#">Article</a>
      <a href="#">Contact</a>
      <a href="#">Purchase</a>
    </div>
  );
};

export default Menu;
