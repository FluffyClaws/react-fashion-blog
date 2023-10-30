import React from "react";
import "./BottomMenu.scss";

const BottomMenu = () => {
  return (
    <div>
      <div className="logo-bottom">
        <a href="#">Fashion</a>
        <div className="rectangle-bottom"></div>
      </div>
      <div className="bottom-menu-wrapper">
        <div className="bottom-menu">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Arcticle</a>
          <a href="#">Contact</a>
          <a href="#">Purchase</a>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
