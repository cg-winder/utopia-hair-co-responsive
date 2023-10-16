import React from "react";
import { useEffect } from "react";

const SalonInfo = () => {
  const currentWeekday = () => {
    let today = new Date().getDay();
    document
      .getElementById("day-no-" + today)
      .classList.add("opening-current-day");
  };

  useEffect(() => {
    currentWeekday();
  }, []);

  return (
    <div className="salon-info">
      <div className="salon-address-opening">
        <div className="salon-address-div">
          <h2 className="salon-address-h2">ADDRESS</h2>
          <ul className="salon-address-li">
            <li>Big Shippon,</li>
            <li>Clifton Fields,</li>
            <li>Preston,</li>
            <li>PR4 0XG</li>
          </ul>
        </div>
        <div className="salon-opening-times-div">
          <h2 className="salon-opening-times-h2">OPENING TIMES</h2>
          <table className="salon-opening-times-li">
            <tr id="day-no-1">
              <th>Monday</th>
              <td>Closed</td>
            </tr>
            <tr id="day-no-2">
              <th>Tuesday</th>
              <td>9 - 7</td>
            </tr>
            <tr id="day-no-3">
              <th>Wednesday</th>
              <td>9 - 7</td>
            </tr>
            <tr id="day-no-4">
              <th>Thursday</th>
              <td>9 - 7</td>
            </tr>
            <tr id="day-no-5">
              <th>Friday</th>
              <td>10 - 7</td>
            </tr>
            <tr id="day-no-6">
              <th>Saturday</th>
              <td>Closed</td>
            </tr>
            <tr id="day-no-0">
              <th>Sunday</th>
              <td>Closed</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="salon-map-widget">
        <iframe
          width="272"
          height="272"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Clifton%20Fields,%20Preston,%20PR4%200XG+(Utopia%20Hair%20Co)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            area maps
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default SalonInfo;
