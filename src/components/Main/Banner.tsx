import React from "react";
import "./Banner.scss";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="bigB">
        <div className="gradient"></div>
        <div className="container">
          <div className="col-12">
            <div className="bigB-text">
              <a href="#" className="cat">
                Vehicle
              </a>
              <a href="#" className="headline">
                One of Saturn’s largest rings <br />
                may be newer than anyone
              </a>
              <div className="bigB-wrapper">
                <a href="#">June 6, 2019</a>
                <a href="#">
                  <span className="by">By </span>Rickie Baroch
                </a>
                <a href="#" className="">
                  4 comments
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
