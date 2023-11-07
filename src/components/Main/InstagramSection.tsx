import React from "react";
import Carousel from "react-multi-carousel";
import { Typography, Link, Box } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import "./InstagramSection.scss";

const InstagramSection: React.FC = () => {
  const totalImages = 6;
  const images = Array.from({ length: totalImages }, (_, index) => {
    const imageNumber = (index % totalImages) + 1;
    return `/images/photo${imageNumber}.png`;
  });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box className="instagram-section">
      <Typography className="insta-main">
        Follow our <Link href="#">@instagram_name</Link>
      </Typography>
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
          <Box key={index} className="instagram-image">
            <img src={image} alt="" />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default InstagramSection;
