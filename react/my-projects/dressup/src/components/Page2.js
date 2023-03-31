import React from "react";
import { Link } from "react-router-dom";
import { CategoriesData } from "../utils/CategoriesData";
import { useEffect } from "react";

const Page2 = () => {
  useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
  const renderList = CategoriesData.map((item) => {
    return (
      <Link
        to={`/categories/${item.name}`}
        key={item.id}
        className=" flex rounded-lg object-cover hover:border-slate-400"
      >
        {/* <img src={item} className="h-15 w-60 object-cover"></img> */}
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer flex flex-grow object-cover place-content-center ">
          <img
            className="rounded-lg flex flex-grow object-cover blur-[.3px] border-2 hover:border-orange-400"
            src={item.image}
            alt="image description"
          />

          <figcaption className=" absolute px-4 text-8 text-rose-300 text-center  bottom-5 bg-orange-600 rounded-lg">
            <p className="text-10 text-center font-bold text-white">
              {item.name.toUpperCase()}
            </p>
          </figcaption>
        </figure>
      </Link>
    );
  });
  return (
    <div className=" flex flex-col h-screen ">
      <div className="flex justify-center mb-4 mt-4 text-4xl p-3 text-3xl gap-3  ">
        CATEGORIES
      </div>
      <div className="grid gap-x-8 gap-y-6 grid-cols-4 h-full m-6">
        {renderList}
      </div>
    </div>
  );
};

export default Page2;
