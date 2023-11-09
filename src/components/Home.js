import React from "react";
import HomePage from "./HomeComponents/HomePage";
import HomeDetail from "./HomeComponents/HomeDetail";
import HomeStylists from "./HomeComponents/HomeStylists";
import HomeContact from "./HomeComponents/HomeContact";
import Testimonials from "./HomeComponents/Testimonials";
import HomedetailBackground from "./HomeComponents/HomedetailBackground";
import HomeInstagram from "./HomeComponents/HomeInstagram";
import HomeServices from "./HomeComponents/HomeServices";
import HomestylistBackground from "./HomeComponents/Homestylistbackground";


const Home = () => {
  return (
    <div className="home-page-wrap">
       <div className="homepage-head" id="home-head">
          <div>Utopia Hair Co.</div>
      </div>
      {/* <HomePage /> */}
      <HomeDetail />
      <HomeServices />
      <HomeStylists/>
      <HomeContact />
      <HomeInstagram />
      <Testimonials />
    </div>
  );
};

export default Home;
