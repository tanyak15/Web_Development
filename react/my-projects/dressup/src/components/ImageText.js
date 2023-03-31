import React from "react";
import img1 from "../images/img1.png";
import { Link } from "react-router-dom";

const ImageText = ({ bgImg, h2, p, to }) => {
  return (
    <div className="flex flex-row items-stretch items-center h-full">
      <div
        className="flex flex-col  w-full h-screen bg-no-repeat bg-cover items-center"
        style={{
          backgroundImage: `url('${bgImg}')`,
        }}
      >
        <h2 className="text-5xl mt-20 p-3">{h2}</h2>
        <p className="text-xl p-5">{p}</p>

        <Link
          to={`/seasons${to}`}
          className="border-2 border-gray-500 rounded text-xl p-1"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default ImageText;
