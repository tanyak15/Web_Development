import React, { useEffect } from "react";
import Header from "./Header";
import ImageText from "./ImageText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imageTextData from "../utils/imageTextData";
import { Link } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background:
          "url('https://cdn-icons-png.flaticon.com/128/271/271228.png')",
        right: "100px",
        filter: "invert(100%)",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background:
          "url('https://cdn-icons-png.flaticon.com/128/318/318476.png')",
        left: "100px",
        filter: "invert(100%)",
        zIndex: "999",
      }}
      onClick={onClick}
    />
  );
};

const Page1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className=" flex flex-col items-stretch  h-5/8 z-0 relative">
      {/* <Header /> */}
      <Slider {...settings}>
        <ImageText {...imageTextData[1]} />

        <ImageText {...imageTextData[2]} />

        <ImageText {...imageTextData[3]} />
      </Slider>
    </div>
  );
};

export default Page1;
