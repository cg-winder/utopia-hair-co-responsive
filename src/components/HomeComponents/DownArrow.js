import React from "react";
import downarrow from "../imgs/down-arrow.png";

const DownArrow = () => {
  // down arrow removal when scrolling down.
  document.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition <= 350) {
      document.getElementById("down-arrow").style.opacity =
        1 - scrollPosition / 350;
    } else {
      document.getElementById("down-arrow").style.opacity = 0;
    }
  });
  return (
    <div>
      <div className="down-arrow">
        <img src={downarrow} id="down-arrow" alt="down-arrow" />
      </div>
    </div>
  );
};

export default DownArrow;
