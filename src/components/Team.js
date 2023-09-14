import React from "react";
import TeamGirls from "./TeamComponents/TeamGirls";

const Team = () => {
  return (
    <div className="team-page-wrap">
        <div className="homepage-head" id="team-head">
          <div>Meet The Team</div>
        </div>
      <TeamGirls />
    </div>
  );
};

export default Team;
