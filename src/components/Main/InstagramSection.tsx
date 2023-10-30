import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InstagramSection.scss";

const InstagramSection = () => {
  const [isCarouselVisible, setCarouselVisible] = useState(false);

  useEffect(() => {
    setCarouselVisible(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
  };

  const images = Array(6)
    .fill(0)
    .map((_, index) => `/images/photo${index + 1}.png`);

  return (
    <div className="instagram-section">
      <div className="insta-main">
        Follow our <a href="#">@instagram_name</a>
      </div>
      {isCarouselVisible && (
        <Slider {...settings} className="insta-photos">
          {images.map((image, index) => (
            <div key={index} className="instagram-image">
              <a href="#">
                <img src={image} alt={`Instagram Image ${index + 1}`} />
              </a>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default InstagramSection;
