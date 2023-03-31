import React, { useEffect } from "react";
import CartCard from "./CartCard";

const CartCardArray = ({ cartItem, handelDelete }) => {
  const renderCartCard =
    cartItem.length > 0 ? (
      cartItem.map((card) => {
        return (
          <CartCard key={card.id} cartItem={card} handelDelete={handelDelete} />
        );
      })
    ) : (
      <div className="flex justify-center items-center h-full text-2xl">
        🛒 Cart Empty
      </div>
    );

  return (
    <div
      className="rounded-lg w-4/6 h-full flex flex-col scrollbar gap-2"
      style={{ boxShadow: "2px 2px 2px 2px grey" }}
    >
      {renderCartCard}
    </div>
  );
};

export default CartCardArray;
