import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="foot-wrapper">
        <div className="foot-container">
          &copy; {currentYear} Logwork. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
