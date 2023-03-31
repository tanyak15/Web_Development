import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const FavouriteImg = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return isAuthenticated ? (
    <Link
      to={`/favourite`}
      // key={item.id}
      className=" flex rounded-lg object-cover hover:border-slate-400"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3208/3208700.png"
        className="h-9 w-9 cursor-pointer"
        alt="fav"
      />
    </Link>
  ) : (
    ""
  );
};

export default FavouriteImg;
