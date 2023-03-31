import React from "react";
import CartCardArray from "../components/CartCardArray";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cartItem, handelDelete, handelEmptyCart }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const notifyOrder = () =>
    toast("Order placed successfully!", {
      autoClose: 1000,
    });
  const notifyEmpty = () =>
    toast("Cart is empty!", {
      autoClose: 3000,
    });

  const onOrderNowClick = () => {
    if (!isAuthenticated) {
      return loginWithRedirect();
    }
    if (cartItem.length === 0) {
      notifyEmpty();
    } else {
      handelEmptyCart();
      notifyOrder();
    }
  };

  // if (cartItem.length) return;
  let renderTotal =
    cartItem.length > 0
      ? cartItem?.reduce((acc, itemTotal) => {
          return acc + itemTotal.price * itemTotal.quantity;
        }, 1)
      : 0;

  return (
    <div className="flex flex-col gap-4 ml-3">
      <div className="flex flex-row h-10 mt-7 items-center justify-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9710/9710557.png"
          className="h-6 w-6"
          alt=""
        />
        <div className="text-3xl">My Cart</div>
      </div>
      <div className="flex gap-12" style={{ height: "30rem" }}>
        {<CartCardArray cartItem={cartItem} handelDelete={handelDelete} />}
        <div className="  w-2/6 flex flex-col h-auto text-xl">
          <div className="flex items-center justify-center text-2xl w-48 bg-black  text-white p-2 rounded-md mt-2 ml-28">
            Order Summary
          </div>
          <div
            className="flex flex-col rounded-lg p-2 m-8 h-52"
            style={{ boxShadow: "2px 2px 3px 2px grey" }}
          >
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>${renderTotal}</div>
            </div>
            <div className="flex justify-between">
              <div>Tax</div>
              <div>TBD</div>
            </div>
            <br className="border-2 border-black " />
            <div className="flex justify-between">
              <div>Total</div>
              <div>${renderTotal}</div>
            </div>
          </div>
          {}
          <button
            className="flex justify-center bg-yellow-300 w-48 ml-28 rounded-sm h-8 items-center"
            onClick={onOrderNowClick}
          >
            Order Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
