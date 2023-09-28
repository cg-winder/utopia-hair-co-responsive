import React from "react";
import HomePage from "./HomeComponents/HomePage";
import HomeDetail from "./HomeComponents/HomeDetail";
import HomeStylists from "./HomeComponents/HomeStylists";
import HomeContact from "./HomeComponents/HomeContact";
import Testimonials from "./HomeComponents/Testimonials";
import HomedetailBackground from "./HomeComponents/HomedetailBackground";
import HomeInstagram from "./HomeComponents/HomeInstagram";


const Home = () => {
  return (
    <div className="page-wrap">
      <HomePage />
      <HomedetailBackground />
      <HomeDetail />
      <HomeStylists/>
      <HomeContact />
      <HomeInstagram />
      <Testimonials />
    </div>
  );
};

export default Home;
