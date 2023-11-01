import React from "react";
import Banner from "./Banner";
import Posts from "./Posts";
import PageNavigation from "./PageNavigation";
import LeftBar from "./LeftBar";
import InstagramSection from "./InstagramSection";
import BottomMenu from "./BottomMenu";
import BottomSocial from "./BottomSocial";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <Posts />
            <PageNavigation />
          </div>
          <div className="col-3">
            <LeftBar />
          </div>
        </div>
      </div>
      <InstagramSection />
      <BottomMenu />
      <BottomSocial />
    </main>
  );
};

export default Main;
