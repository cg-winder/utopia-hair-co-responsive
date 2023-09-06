import React from "react";
import HomePage from "./HomeComponents/HomePage";
import DownArrow from "./HomeComponents/DownArrow";
import HomeDetail from "./HomeComponents/HomeDetail";
import CollageMenu from "./HomeComponents/CollageMenu";
import HomeContact from "./HomeComponents/HomeContact";
import HomeTestimonials from "./HomeComponents/HomeTestimonials";

const Home = () => {
  return (
    <div className="page-wrap">
      <HomePage />
      <DownArrow />
      <HomeDetail />
      <CollageMenu />
      <HomeContact />
      <HomeTestimonials />
    </div>
  );
};

export default Home;
