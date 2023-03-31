import { React, useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite";
import SeasonCategory from "./pages/SeasonCategory";
import Login from "./pages/Login";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [cartItem, setCartItem] = useState([]);
  const [favArray, setFavArray] = useState([]);

  // ----------------------------------------------------------------------------------- //

  const addCartLocally = (cartItem) => {
    const cartItemToStore = JSON.stringify(cartItem);
    window.localStorage.setItem("CartItems", cartItemToStore);
  };
  useEffect(() => {
    if (!window.localStorage.getItem("CartItems")) {
      return;
    }
    const cartItemsLocalStorage = JSON.parse(
      window.localStorage.getItem("CartItems")
    );
    setCartItem(cartItemsLocalStorage);
  }, []);
  // ------------------------------------------------------------------------------//
  const addFavLocally = (favItem) => {
    const favItemToStore = JSON.stringify(favItem);
    window.localStorage.setItem("FavItems", favItemToStore);
  };
  useEffect(() => {
    if (!window.localStorage.getItem("FavItems")) {
      return;
    }
    const favItemsLocalStorage = JSON.parse(
      window.localStorage.getItem("FavItems")
    );
    setFavArray(favItemsLocalStorage);
  }, []);

  // ----------------------------------------------------------------------------------- //

  const handelAddToCart = (item) => {
    // here "check" is an index of whichItem is added again
    const check = cartItem.findIndex((itm) => {
      return itm.id === item.productId;
    });

    // If element already present in cart then ++ the quantity else add it in the Cart
    if (check > -1) {
      const cartItemCopy = JSON.parse(JSON.stringify(cartItem));
      cartItemCopy[check].quantity++;
      addCartLocally(cartItemCopy);
      setCartItem(cartItemCopy);
    } else {
      const newCartItem = {
        id: item.productId,
        name: item.productName,
        price: item.productPrice,
        image: item.productImageUrl,
        quantity: 1,
      };

      addCartLocally([...cartItem, newCartItem]);
      setCartItem([...cartItem, newCartItem]);
    }
  };

  // *********************************************************************************** //

  const handelAddToFav = (item) => {
    const repeteFav = favArray.findIndex((itm) => {
      return itm.productId === item.productId;
    });

    if (repeteFav > -1) {
      return;
    } else {
      addFavLocally([...favArray, item]);
      setFavArray([...favArray, item]);
    }
  };

  // ***************************************************************************** //

  const handelDelete = (itemId) => {
    // const check = cartItem.findIndex((itm) => {
    //   return itm.id === itemId;
    // });
    const delCard = cartItem.filter((itm) => {
      if (itm.id === itemId) {
        return false;
      }
      return true;
    });

    addCartLocally(delCard);
    setCartItem(delCard);
  };

  // ----------------------------------------------------------------------------------- //
  const handelRemoveFromFav = (item) => {
    // console.log(item.productId);
    const removeFav = favArray.filter((itm) => {
      if (itm.productId === item.productId) {
        return false;
      }
      return true;
    });

    addFavLocally(removeFav);
    setFavArray(removeFav);
  };

  const handelEmptyCart = () => {
    if (cartItem.length !== 0) {
      addCartLocally([]);
      setCartItem([]);
    }
  };

  return (
    <Auth0Provider
      domain="dev-katv4jx78tgdowbx.us.auth0.com"
      clientId="3f1WEM13YuBMDmnnsesrUbBtIgn30cFi"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* colon ke baad wale cheez(category) ko use params ke through access krte h */}
          <Route
            path="/categories/:category"
            element={
              <Category
                // favArray={favArray}
                handelAddToCart={handelAddToCart}
                handelAddToFav={handelAddToFav}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
                handelDelete={handelDelete}
                handelEmptyCart={handelEmptyCart}
              />
            }
          />
          <Route
            path="/favourite"
            element={
              <Favourite
                favArray={favArray}
                handelAddToCart={handelAddToCart}
                handelAddToFav={handelAddToFav}
                handelRemoveFromFav={handelRemoveFromFav}
              />
            }
          />
          <Route
            path="/seasons/:season"
            element={
              <SeasonCategory
                handelAddToCart={handelAddToCart}
                handelAddToFav={handelAddToFav}
              />
            }
          />
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/productDetail/:productId"
            element={
              <ProductDetailsPage
                handelAddToCart={handelAddToCart}
                handelAddToFav={handelAddToFav}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default App;
