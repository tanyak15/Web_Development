import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CardArray from "../components/CardArray";
import FavouriteImg from "../components/FavouriteImg";

const SeasonCategory = ({ handelAddToCart, handelAddToFav }) => {
  const { season } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen">
      <div className="flex rounded  bg-gradient-to-r from-purple-600 to-pink-300 font-['Cursed_Parade']">
        <h2 className="text-5xl p-3 flex justify-center grow ml-9">
          {season.toUpperCase() + " COLLECTION"}
        </h2>
        <div className="flex justify-center p-3 items-center gap-7 mr-2">
          <Link
            to={`/favourite`}
            // key={item.id}
            className=" flex rounded-lg object-cover hover:border-slate-400"
          >
            <FavouriteImg />
          </Link>

          <Link
            to={`/cart`}
            // key={item.id}
            className=" flex rounded-lg object-cover hover:border-slate-400"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
              className="h-9 w-9 cursor-pointer"
              alt="cart"
            />
          </Link>
        </div>
      </div>
      <CardArray
        season={season}
        handelAddToCart={handelAddToCart}
        handelAddToFav={handelAddToFav}
      />
    </div>
  );
};

export default SeasonCategory;
