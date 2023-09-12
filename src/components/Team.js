import React from "react";
import salon from "./imgs/salonpic3.jpeg";
import TeamGirls from "./TeamComponents/TeamGirls";

const Team = () => {
  return (
    <div className="team-page-wrap">
      <div className="homepage-contents" id="team-head-pic">
        {/* <div className="homepage-img">
          <img src={salon} alt="" />
        </div> */}
        <div className="homepage-head" id="team-head">
          <div>Meet The Team</div>
        </div>
      </div>
      <TeamGirls />
    </div>
  );
};

export default Team;
