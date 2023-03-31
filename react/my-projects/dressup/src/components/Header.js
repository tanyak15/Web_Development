import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavouriteImg from "./FavouriteImg";

export default function Header() {
  const [show, setshow] = useState(false);

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notifyLogout = () =>
    toast.success("Logout successfully!", { autoClose: 8000 });

  return (
    <div className=" bg-white ">
      <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-3 px-4">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between items-center">
          <div className="sm:flex flex space-x-4">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });

                  notifyLogout();
                }}
                className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm
              leading-3 text-indigo-700 bg-white border border-indigo-700
              focus:outline-none focus:bg-gray-200 hover:bg-gray-200
              duration-150 justify-center items-center"
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={() => {
                  loginWithRedirect();
                }}
                className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm
              leading-3 text-indigo-700 bg-white border border-indigo-700
              focus:outline-none focus:bg-gray-200 hover:bg-gray-200
              duration-150 justify-center items-center"
              >
                Log In
              </button>
            )}
            {isAuthenticated && (
              <p className="flex items-center font-semibold text-blue-500">
                Welcome {user.name.split("@")[0]}!
              </p>
            )}

            {/* <Link
              to={`/login`}
              className="rounded-md flex space-x-2 w-48 h-10 font-normal text-sm
              leading-3 text-indigo-700 bg-white border border-indigo-700
              focus:outline-none focus:bg-gray-200 hover:bg-gray-200
              duration-150 justify-center items-center"
            >
              Sign Up
              <img
                src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
                className="h-5 w-5 ml-2"
              ></img>
            </Link> */}
          </div>
          <div className=" flex space-x-3 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4223/4223463.png"
              className="h-9 w-9 "
              alt=""
            ></img>

            <h1 className=" font-serif text-5xl leading-6 text-gray-800">
              DRESSUP
            </h1>
          </div>
          <div className="flex justify-center p-1 items-center gap-7 mr-2">
            <FavouriteImg />

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
          {/* <div className="hidden sm:flex flex-row space-x-4">
            <Link
              to={`/login`}
              className="rounded-md flex space-x-2 w-48 h-10 font-normal text-sm
              leading-3 text-indigo-700 bg-white border border-indigo-700
              focus:outline-none focus:bg-gray-200 hover:bg-gray-200
              duration-150 justify-center items-center"
            >
              Sign Up
              <img
                src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
                className="h-5 w-5 ml-2"
              ></img>
            </Link>
          </div> */}
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
          >
            <svg
              className={`${show ? "hidden" : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className=" transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${show ? "block" : "hidden"}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              //   xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            <SearchBar />
          </div>
          <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
            <Link
              to={`/login`}
              className="rounded-md flex space-x-2 w-48 h-10 font-normal text-sm
              leading-3 text-indigo-700 bg-white border border-indigo-700
              focus:outline-none focus:bg-gray-200 hover:bg-gray-200
              duration-150 justify-center items-center"
            >
              Sign Up
              <img
                src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
                className="h-5 w-5 ml-2"
                alt="sign up"
              ></img>
            </Link>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
}
