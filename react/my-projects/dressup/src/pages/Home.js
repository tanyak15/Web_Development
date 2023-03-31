import React from "react";
import Header from "../components/Header";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";

const Home = () => {
  return (
    <div className="flex flex-col gap-3">
      <Header />
      <Page1 />
      <div></div>
      <Page2 />
    </div>
  );
};

export default Home;
