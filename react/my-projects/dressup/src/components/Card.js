import React from "react";
// import _ from "lodash";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

const Card = ({
  handelAddToCart,
  handelAddToFav,
  favArray,
  handelRemoveFromFav,
  ...props
}) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  // console.log("🤯🤯", favArray);
  // console.log(handelAddToFav);
  // console.log(favArray.length);

  // agar card favourite wale page pe h to REMOVE option dikhao warna FAVOURITE he show kro
  const newMethod = favArray?.findIndex((item) => {
    if (item.productId === props.item.productId) {
      return true;
    }
    return false;
  });

  const onFavClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isAuthenticated) {
      return loginWithRedirect();
    }
    newMethod >= 0
      ? (() => {
          handelRemoveFromFav(props.item);
          notifyRemoved();
        })()
      : (() => {
          handelAddToFav(props.item);
          notifyFav();
        })();
  };
  //------------------------------------------------------------------------------------//
  const notifyFav = () =>
    toast("Added to Favourites!", {
      autoClose: 1000,
    });

  const notifyCart = () => toast("Added to Cart!", { autoClose: 1000 });

  const notifyRemoved = () =>
    toast("Removed successfully!", { autoClose: 1000 });
  //------------------------------------------------------------------------------------//
  const renderStar = () => {
    const arr = [];
    for (let i = 0; i < props.item.productRatings; i++) {
      arr.push(
        <img
          key={i}
          src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
          className="h-5 w-5"
          alt=""
        ></img>
      );
    }
    return arr;
  };

  return (
    <Link
      className="card container bg-teal-800 h-96 w-72 m-3 rounded-lg relative border"
      to={`/productDetail/${props.item.productId}`}
    >
      <div className="p-3 ">
        <img
          src={props.item.productImageUrl}
          className="rounded-lg"
          alt=""
        ></img>
      </div>
      <div className=" flex flex-col items-center text-white">
        <h3 className="text-xl font-bold ">{props.item.productName}</h3>
        <p className="text-3xl">${props.item.productPrice}</p>
      </div>
      <div className="flex items-center justify-center mt-4">
        {renderStar()}
      </div>
      <div className="flex mt-6 bottom-0 w-full h-10">
        <div
          className="flex flex-1 bg-red-400 text-white justify-center items-center rounded-l-lg text-lg cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            notifyCart();
            handelAddToCart(props.item);
          }}
        >
          CART
        </div>
        <div
          className="flex flex-1 bg-blue-600 text-white justify-center items-center  rounded-r-lg text-lg cursor-pointer"
          onClick={onFavClick}
        >
          {newMethod >= 0 ? "REMOVE" : "FAVOURITE"}
        </div>
      </div>
      <ToastContainer />
    </Link>
  );
};

export default Card;
