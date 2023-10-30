import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./InstagramSection.scss";

const InstagramSection = () => {
  const images = Array(6)
    .fill(0)
    .map((_, index) => `/images/photo${index + 1}.png`);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  return (
    <div className="instagram-section">
      <div className="insta-main">
        Follow our <a href="#">@instagram_name</a>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={true}
        centerMode={true}
        focusOnSelect={true}
      >
        {images.map((image, index) => (
          <div key={index} className="instagram-image">
            <img src={image} alt={`Instagram Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default InstagramSection;
