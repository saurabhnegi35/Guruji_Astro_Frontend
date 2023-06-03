import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselImage } from "../constants/constants";

const carouselImages = [
  CarouselImage.left1,
  CarouselImage.left2,
  CarouselImage.girlImage,
  CarouselImage.right1,
  CarouselImage.right2,
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    initialSlide: 2,
    speed: 200,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  const handleLeftArrowClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(4);
    } else {
      setActiveIndex(activeIndex - 1);
    }
    sliderRef.current.slickPrev();
  };

  const handleRightArrowClick = () => {
    if (activeIndex === 4) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="video-carousel">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`image-container ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <img src={image} alt="" />
              <div className="play-btn-cont">
                <img src={CarouselImage.playButton} alt="Play Button" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="arrow-container">
        <img
          src={CarouselImage.leftArrow}
          alt=""
          onClick={handleLeftArrowClick}
          className={`${activeIndex === 0 ? "disabled" : ""}`}
        />
        <img
          src={CarouselImage.rightArrow}
          alt=""
          onClick={handleRightArrowClick}
          className={`${activeIndex === 4 ? "disabled" : ""}`}
        />
      </div>
    </>
  );
};

export default VideoCarousel;
