import React from "react";
import "./AuthorSection.scss";

const AuthorSection: React.FC = () => (
  <div className="author">
    <div className="left-bar-blocks">About the Author</div>
    <div className="shadow">
      <div className="author-pic"></div>
      <div className="author-info">
        <div className="author-name">Kate Willems</div>
        <div className="author-occup">Food & cooking blogger</div>
        <div className="author-bio">
          Hi, I'm Sonia. Cooking is the way I express my creative side to the
          world. Welcome to my Kitchen Corner on…
        </div>
      </div>
      <div className="more-author">
        <a href="#">CONTINUE READING</a>
      </div>
    </div>
  </div>
);

export default AuthorSection;
