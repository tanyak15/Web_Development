import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { fetchSpecificProductData } from "../utils/productsData";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailsPage = ({ handelAddToCart, handelAddToFav }) => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  const notifyFav = () =>
    toast("Added to Favourites!", {
      autoClose: 1000,
    });

  const notifyCart = () => toast("Added to Cart!", { autoClose: 1000 });

  useEffect(() => {
    setProduct(fetchSpecificProductData(+productId));
  }, [productId]);

  // jab tak product null h tab spinner show karana h warna data show krna h
  return (
    <div className="flex flex-col gap-3">
      <Header />
      {product ? (
        <div className="flex p-3">
          <div className="h-80  flex justify-center">
            <img
              src={product?.productImageUrl}
              className="h-80 rounded"
              alt=""
            />
          </div>
          <div className="h-80 w-4/6  flex flex-col p-3">
            <div className="text-2xl font-bold">{product?.productName}</div>
            <div className="mt-4 text-xl">${product?.productPrice}</div>
            <div className="flex mt-3 gap-7 mr-2">
              <div className=" flex rounded-lg object-cover hover:border-slate-400">
                <button
                  className="p-2 rounded bg-red-500"
                  onClick={() => {
                    notifyFav();
                    handelAddToFav(product);
                  }}
                >
                  ADD TO FAVOURITE
                </button>
              </div>
              <div className=" flex rounded-lg object-cover hover:border-slate-400">
                <button
                  className=" p-2 bg-green-400 rounded"
                  onClick={() => {
                    notifyCart();
                    handelAddToCart(product);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="mt-4 text-xl font-semibold">Product Details</div>
            <p>{product?.productDescription}</p>
          </div>
        </div>
      ) : (
        <div className="w-screen h-96 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductDetailsPage;
