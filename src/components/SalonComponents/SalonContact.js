import { React, useEffect } from "react";

const SalonContact = () => {
  const currentWeekday = () => {
    let today = new Date().getDay();
    document
      .getElementById("salon-week-day-" + today)
      .classList.add("salon-opening-current-day");
  };

  useEffect(() => {
    currentWeekday();
  }, []);

  return (
    <div className="saloncontact-page-wrap">
      <div className="saloncontact-banner">
          <div className="saloncontact-address">
            <div className="saloncontact-address-h4">ADDRESS</div>
            <table className="saloncontact-address-table">
              <li>Big Shippon,</li>
              <li>Clifton Fields,</li>
              <li>Preston,</li>
              <li>PR4 0XG</li>
            </table>
          </div>
          <div className="saloncontact-openingtimes">
            <div className="saloncontact-openingtimes-h4">OPENING TIMES</div>
            <table className="saloncontact-weekdays">
              <tr id="salon-week-day-1">
                <th>Monday</th>
                <td>Closed</td>
              </tr>
              <tr id="salon-week-day-2">
                <th>Tuesday</th>
                <td>9 - 7</td>
              </tr>
              <tr id="salon-week-day-3">
                <th>Wednesday</th>
                <td>9 - 7</td>
              </tr>
              <tr id="salon-week-day-4">
                <th>Thursday</th>
                <td>9 - 7</td>
              </tr>
              <tr id="salon-week-day-5">
                <th>Friday</th>
                <td>10 - 7</td>
              </tr>
              <tr id="salon-week-day-6">
                <th>Saturday</th>
                <td>Closed</td>
              </tr>
              <tr id="salon-week-day-0">
                <th>Sunday</th>
                <td>Closed</td>
              </tr>
            </table>
          </div>
      </div>
    </div>
  );
};

export default SalonContact;
