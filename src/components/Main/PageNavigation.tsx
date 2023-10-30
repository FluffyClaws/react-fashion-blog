// PageNavigation.tsx

import React from "react";
import "./PageNavigation.scss";

const PageNavigation: React.FC = () => {
  return (
    <div className="page-nav-wrapper col-12">
      <div className="page-nav-box">
        <a href="#">
          <div className="prev-page">OLDER POST</div>
        </a>
        <a href="#">
          <div className="page-num">1</div>
        </a>
        <a href="#">
          <div className="page-num">2</div>
        </a>
        <a href="#">
          <div className="page-num">3</div>
        </a>
        <a href="#">
          <div className="page-num">...</div>
        </a>
        <a href="#">
          <div className="page-num last">8</div>
        </a>
        <a href="#">
          <div className="next-page">
            NEXT POST
            <div className="arrow-next"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PageNavigation;
