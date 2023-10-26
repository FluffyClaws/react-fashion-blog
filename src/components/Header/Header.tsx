import React from "react";
import Menu from "./Menu";
import "./Header.scss";
import Logo from "./Logo";

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
