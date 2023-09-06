import React from "react";
import book from "../imgs/backwash.jpeg";
import salon from "../imgs/salonsolo.jpeg";
import team from "../imgs/utopiateam.jpeg";
import lashes from "../imgs/utopialashbed.jpeg";
import nails from "../imgs/nails2.jpeg";
import hair from "../imgs/hair15.jpeg";

const CollageMenu = () => {
  return (
    <div className="collagemenu">
      <div className="collage-line1">
        <div
          className="collage-book"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://linktr.ee/utopiahairco";
          }}
        >
          <a className="book-img">
            <img src={book} alt="book" />
          </a>
          <div className="collage-text" id="booking-text">
            <p>Booking</p>
          </div>
        </div>
        <div className="collage-team">
          <a className="team-img" href="/team">
            <img src={team} alt="team" />
            <div className="collage-text" id="team-text">
              <p>Team</p>
            </div>
          </a>
        </div>
        <div className="collage-salon">
          <a className="salon-img" href="/salon">
            <img src={salon} alt="salon" />
            <div className="collage-text" id="salon-text">
              <p>Salon</p>
            </div>
          </a>
        </div>
      </div>

      <div className="collage-line2">
        <div className="collage-hair">
          <a className="hair-img" href="/services">
            <img src={hair} alt="hair" />
            <div className="collage-text" id="hair-text">
              <p>Hair</p>
            </div>
          </a>
        </div>

        <div className="collage-nails">
          <a className="nails-img" href="/services">
            <img src={nails} alt="nails" />
            <div className="collage-text" id="nails-text">
              <p>Nails</p>
            </div>
          </a>
        </div>
        <div className="collage-lashes">
          <a className="lashes-img" href="/services">
            <img src={lashes} alt="lashes" />
            <div className="collage-text" id="lashes-text">
              <p>Lashes & Brows</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollageMenu;
