import { React, useEffect } from "react";

const HomeContact = () => {
  const currentWeekday = () => {
    let today = new Date().getDay();
    document
      .getElementById("week-day-" + today)
      .classList.add("opening-current-day");
  };

  useEffect(() => {
    currentWeekday();
  }, []);

  return (
    <div className="homecontact-page-wrap">
      <div className="homecontact-banner">
        <div className="homecontact-address">
          <div className="homecontact-address-h4">ADDRESS</div>
          <ul className="homecontact-address-ul">
            <li>Big Shippon,</li>
            <li>Clifton Fields,</li>
            <li>Preston,</li>
            <li>PR4 0XG</li>
          </ul>
        </div>
        <div className="homecontact-openingtimes">
          <div className="homecontact-openingtimes-h4">OPENING TIMES</div>
          <table className="homecontact-weekdays">
            <tr id="week-day-1">
              <th>Monday</th>
              <td>Closed</td>
            </tr>
            <tr id="week-day-2">
              <th>Tuesday</th>
              <td>Closed</td>
            </tr>
            <tr id="week-day-3">
              <th>Wednesday</th>
              <td> 10am - 7pm</td>
            </tr>
            <tr id="week-day-4">
              <th>Thursday</th>
              <td>10am - 7pm</td>
            </tr>
            <tr id="week-day-5">
              <th>Friday</th>
              <td>10am - 7pm</td>
            </tr>
            <tr id="week-day-6">
              <th>Saturday</th>
              <td>9am - 5pm</td>
            </tr>
            <tr id="week-day-0">
              <th>Sunday</th>
              <td>Closed</td>
            </tr>
          </table>
        </div>
        <div className="homecontact-book">
          <div className="homecontact-book-h4">BOOK</div>
          <a
            className="homecontact-book-with"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.fresha.com/a/nicola-utopia-hair-co-preston-clifton-fields-ensjjwax";
            }}
          >
            NICOLA
          </a>
          <a
            className="homecontact-book-with"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.fresha.com/a/alannahjepsonhair-clifton-uk-qxkz7ud9?pId=833656";
            }}
          >
            ALANNAH
          </a>
          <a
            className="homecontact-book-with"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.fresha.com/a/creative-hair-by-ellie-monica-clifton-uk-vkrlxmy3?pId=833656";
            }}
          >
            ELLIE
          </a>
          <a
            className="homecontact-book-with"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.fresha.com/a/beauty-by-erin-obrien-clifton-uk-sqfh9xvb?pId=833656";
            }}
          >
            ERIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;