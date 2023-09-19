import React from "react";
import HomePage from "./HomeComponents/HomePage";
import HomeDetail from "./HomeComponents/HomeDetail";
import HomeStylists from "./HomeComponents/HomeStylists";
import HomeContact from "./HomeComponents/HomeContact";
import HomeTestimonials from "./HomeComponents/HomeTestimonials";

const Home = () => {
  return (
    <div className="page-wrap">
      <HomePage />
      <HomeDetail />
      <HomeStylists/>
      <HomeContact />
      <HomeTestimonials />
    </div>
  );
};

export default Home;
