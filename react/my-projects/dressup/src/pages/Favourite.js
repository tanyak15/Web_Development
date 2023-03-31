import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Favourite = ({
  favArray,
  handelAddToCart,
  handelAddToFav,
  handelRemoveFromFav,
}) => {
  const renderFav = favArray.map((item) => {
    return (
      <div key={item.productId}>
        <Card
          handelAddToCart={handelAddToCart}
          handelAddToFav={handelAddToFav}
          item={item}
          favArray={favArray}
          handelRemoveFromFav={handelRemoveFromFav}
        />
      </div>
    );
  });

  return (
    <div className="h-screen flex flex-col">
      <div className=" h-1/6 text-5xl flex items-center  font-['Cursed_Parade']">
        <div className="flex grow justify-center">💖FAVOURITES</div>
        <Link
          to={`/cart`}
          // key={item.id}
          className=" flex rounded-lg object-cover hover:border-slate-400 mr-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
            className="h-9 w-9 cursor-pointer "
            alt="cart"
          />
        </Link>
      </div>
      <div className=" h-5/6 grid grid-cols-4 ">{renderFav}</div>
    </div>
  );
};

export default Favourite;
