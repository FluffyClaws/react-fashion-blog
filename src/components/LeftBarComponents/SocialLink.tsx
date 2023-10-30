import React from "react";
import "./SocialLink.scss";

const SocialLink: React.FC<{
  className: string;
  count: number;
  label: string;
}> = ({ className, count, label }) => (
  <a href="">
    <div className={`social ${className}`}>
      <div className="social-info">
        {count}
        <span>{label}</span>
      </div>
    </div>
  </a>
);
export default SocialLink;
