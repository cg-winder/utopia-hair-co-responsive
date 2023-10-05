import React from "react";
import { useEffect } from "react";

const FooterDetails = () => {
  const currentWeekday = () => {
    let today = new Date().getDay();
    document.getElementById("day-" + today).classList.add("footer-current-day");
  };
  useEffect(() => {
    currentWeekday();
  }, []);

  return (
    <div className="footer-details">
      <div className="footer-address">
        <ul className="footer-address-list">
          <li>BIG SHIPPON,</li>
          <li>CLIFTON FIELDS,</li>
          <li>PRESTON,</li>
          <li>PR4 0XG</li>
        </ul>
      </div>
      <div className="footer-opening-times">
        <table className="footer-weekdays">
          <tr id="day-1">
            <th>Monday</th>
            <td>Closed</td>
          </tr>
          <tr id="day-2">
            <th>Tuesday</th>
            <td>9am - 7pm</td>
          </tr>
          <tr id="day-3">
            <th>Wednesday</th>
            <td>9am - 7pm</td>
          </tr>
          <tr id="day-4">
            <th>Thursday</th>
            <td>9am - 7pm</td>
          </tr>
          <tr id="day-5">
            <th>Friday</th>
            <td>10am - 7pm</td>
          </tr>
          <tr id="day-6">
            <th>Saturday</th>
            <td>Closed</td>
          </tr>
          <tr id="day-0">
            <th>Sunday</th>
            <td>Closed</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FooterDetails;
