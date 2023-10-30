import React from "react";
import "./FeaturedPost.scss";

const FeaturedPost: React.FC<{ picClass: string }> = ({ picClass }) => (
  <div className="shadow">
    <div className={`feat-left-post ${picClass}`}></div>
    <div className="feat-left-post-info">
      <div className="post-cat">
        <a href="">Clothes</a>
      </div>
      <div className="feat-head">
        <a href="">One of Saturn’s largest rings may be newer than anyone</a>
      </div>
      <div className="addinfo-wrapper">
        <div className="post-addinfo">
          <a href="">June 6, 2019</a>
          <a href="">
            <span className="by-post">By </span>Rickie Baroch
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default FeaturedPost;
