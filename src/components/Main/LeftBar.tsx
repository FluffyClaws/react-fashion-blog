import React from "react";
import "./LeftBar.scss";
import AuthorSection from "../LeftBarComponents/AuthorSection";
import FeaturedPost from "../LeftBarComponents/FeaturedPost";
import SocialLink from "../LeftBarComponents/SocialLink";
import Tag from "../LeftBarComponents/Tag";
import Categories from "../LeftBarComponents/Categories";

const LeftBar: React.FC = () => (
  <div className="left-bar">
    <AuthorSection />
    <div className="feat-left">
      <div className="left-bar-blocks">Featured posts</div>
      <FeaturedPost picClass="pic1" />
      <FeaturedPost picClass="pic2" />
      <FeaturedPost picClass="pic3" />
    </div>
    <Categories />

    <div className="social-links">
      <div className="left-bar-blocks">Social media</div>
      <SocialLink className="fb" count={32} label="likes" />
      <SocialLink className="pinterest" count={814} label="followers" />
      <SocialLink className="vine" count={165} label="followers" />
      <SocialLink className="ball" count={6} label="followers" />
      <SocialLink className="twitter" count={130} label="followers" />
      <SocialLink className="be" count={37} label="followers" />
      <SocialLink className="instagram" count={854} label="followers" />
      <SocialLink className="youtube" count={52} label="subscribers" />
      <SocialLink className="gplus" count={642} label="followers" />
    </div>
    <Tag />
  </div>
);

export default LeftBar;
