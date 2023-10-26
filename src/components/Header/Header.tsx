// Header.tsx
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="row">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
