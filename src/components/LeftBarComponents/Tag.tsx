import React from "react";
import "./Tag.scss";

const tagsList = [
  "Business",
  "Freelance",
  "Money",
  "Experience",
  "Lifestyle",
  "SEO",
  "Wordpress",
  "Marketing",
  "UX",
  "Modern",
  "Success",
  "Nature",
];

const Tag: React.FC = () => (
  <div>
    <div className="left-bar-blocks">Tags</div>
    {tagsList.map((tag) => (
      <div key={tag} className="tags">
        <a href="">{tag}</a>
      </div>
    ))}
  </div>
);

export default Tag;
