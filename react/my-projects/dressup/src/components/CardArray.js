import React from "react";
import Card from "./Card";
import { filterByCategory, filterBySeason } from "../utils/productsData";

const CardArray = ({
  category = null,
  season = null,
  handelAddToCart,
  handelAddToFav,
}) => {
  // console.log("🙄🙄🙄🙄", favArray);
  // console.log(handelAddToFav);
  let renderCard;
  if (category) {
    renderCard = filterByCategory(category).map((item) => {
      return (
        <Card
          key={item.productId}
          item={item}
          handelAddToCart={handelAddToCart}
          handelAddToFav={handelAddToFav}
        />
      );
    });
  } else if (season) {
    renderCard = filterBySeason(season).map((item) => {
      return (
        <Card
          key={item.productId}
          item={item}
          handelAddToCart={handelAddToCart}
          handelAddToFav={handelAddToFav}
        />
      );
    });
  } else {
    renderCard = [];
  }

  return (
    <div className="grid gap-0 grid-cols-4 grid-rows-3 ">{renderCard}</div>
  );
};

export default CardArray;
