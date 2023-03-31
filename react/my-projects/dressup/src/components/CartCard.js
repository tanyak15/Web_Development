import React from "react";
import Dropdown from "./Dropdown";

const CartCard = ({ cartItem, handelDelete }) => {
  return (
    <div className="flex flex-col border-b-2 border-black p-2 ">
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src={cartItem.image} className="h-48 w-32" />
          <div>{cartItem.name}</div>
        </div>
        <div className="flex flex-col w-24 items-center gap-1">
          <h4 className=" font-bold">Each</h4>
          <p>${cartItem.price}</p>
        </div>
        <div className="flex flex-col w-24 items-center gap-1">
          <h4 className=" font-bold">Quantity</h4>
          <p>{cartItem.quantity}</p>
        </div>
        <div className="flex flex-col w-24 items-center gap-1">
          <h4 className=" font-bold">total</h4>
          <p>${cartItem.price * cartItem.quantity}</p>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <button
          className="rounded-sm bg-red-500 w-14"
          onClick={() => handelDelete(cartItem.id)}
        >
          DELETE
        </button>
        {/* <button className="rounded-sm bg-red-500 w-14">EDIT</button> */}
      </div>
    </div>
  );
};

export default CartCard;
