import React from "react";
import HomeDetail from "./HomeComponents/HomeDetail";
import HomeContact from "./HomeComponents/HomeContact";
import Testimonials from "./HomeComponents/Testimonials";
import HomeInstagram from "./HomeComponents/HomeInstagram";
import HomeServicesAndStylists from "./HomeComponents/HomeServicesAndStylists";


const Home = () => {
  return (
    <div className="home-page-wrap">
       <div className="homepage-head" id="home-head">
          <div>Utopia Hair Co.</div>
      </div>
      {/* <HomePage /> */}
      <HomeDetail />
      <HomeServicesAndStylists />
      <HomeContact />
      <HomeInstagram />
      <Testimonials />
    </div>
  );
};

export default Home;
