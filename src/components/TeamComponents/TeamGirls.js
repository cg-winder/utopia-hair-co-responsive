import profileplaceholder from "../imgs/profile-placeholder.jpeg";
import instagramlogo from "/Users/chloewinder/Desktop/ /Code/Projects/utopia-hair-co-responsive/src/components/imgs/nav-icon3-instagram.svg"
import React from "react";

const TeamGirls = () => {
  return (
    <div>
      <div className="team-girls">
        <div className="flex-name-treatment">
          <h2 className="team-h2">NICOLA</h2>
          <div className="treatment-type">
            <span>HAIR</span>
          </div>
        </div>
        <div className="team-buttons">
          <div className="team-social-button">
            <a href="https://www.instagram.com/nicola_utopiahairco/">
              <img src={instagramlogo} alt="instagram-icon" />
            </a>
          </div>
          <button
            className="team-book-now-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.fresha.com/a/nicola-utopia-hair-co-preston-clifton-fields-ensjjwax";
            }}
          >
            BOOK WITH NICOLA
          </button>
        </div>
        <div className="team-about-picture">
          <div className="team-pics">
            <img src={profileplaceholder} height="320px" width="280px" />
          </div>
          <div className="team-about">
            Hi I'm Nicola, owner of Utopia Hair Co! I started my hairdressing
            journey working in salons from the age of 15 as a Saturday girl.
            Fast forward 10 years, I can’t believe I have opened the salon of my
            dreams in the most beautiful space. I’m so grateful to have built up
            such a lovely, loyal clientele that have turned into friends over
            the years. I specialise in free hand balayage, blondes and vivid
            hair colours but love all aspects of hair!
          </div>
        </div>
      </div>

      <div className="team-girls">
        <div className="flex-name-treatment">
          <h2 className="team-h2">ALANNAH</h2>
          <div className="treatment-type">
            <span>HAIR</span>
          </div>
        </div>
        <div className="team-buttons">
          <div className="team-social-button">
            <a href="https://www.instagram.com/alannahjepsonhair/">
              <img src={instagramlogo} alt="instagram-icon" />
            </a>
          </div>
          <button
            className="team-book-now-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.fresha.com/a/alannahjepsonhair-clifton-uk-qxkz7ud9?pId=833656";
            }}
          >
            BOOK WITH ALANNAH
          </button>
        </div>

        <div className="team-about-picture">
          <div className="team-pics">
            <img src={profileplaceholder} height="320px" width="280px" />
          </div>
          <div className="team-about">
            I'm Alannah, a self employed hair stylist based at Utopia Hair Co. I
            specialise in blondes and balayage.
          </div>
        </div>
      </div>

      <div className="team-girls">
        <div className="flex-name-treatment">
          <h2 className="team-h2">ELLIE</h2>
          <div className="treatment-type">
            <span>HAIR</span>
          </div>
        </div>
        <div className="team-buttons">
          <div className="team-social-button">
            <a href="https://www.instagram.com/creativehair_by_elliemonica/">
              <img src={instagramlogo} alt="instagram-icon" />
            </a>
          </div>
          <button
            className="team-book-now-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.fresha.com/a/creative-hair-by-ellie-monica-clifton-uk-vkrlxmy3?pId=833656";
            }}
          >
            BOOK WITH ELLIE
          </button>
        </div>
        <div className="team-about-picture">
          <div className="team-pics">
            <img src={profileplaceholder} height="320px" width="280px" />
          </div>
          <div className="team-about">
            I'm a self employed hair stylist, waiting to start you on your new
            hair journey. Passionate about all things colour, cutting and hair
            design, I rent a chair on a Friday 10-7 at Utopia Hair Co.
          </div>
        </div>
      </div>

      <div className="team-girls">
        <div className="flex-name-treatment">
          <h2 className="team-h2">ERIN</h2>
          <div className="treatment-type-erin">
            <span>NAILS, LASHES & BROWS</span>
          </div>
        </div>
        <div className="team-buttons">
          <div className="team-social-button">
            <a href="https://www.instagram.com/beautybyerinobrien/">
              <img src={instagramlogo} alt="instagram-icon" />
            </a>
          </div>
          <button
            className="team-book-now-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.fresha.com/a/beauty-by-erin-obrien-clifton-uk-sqfh9xvb?pId=833656";
            }}
          >
            BOOK WITH ERIN
          </button>
        </div>
        <div className="team-about-picture">
          <div className="team-pics">
            <img src={profileplaceholder} height="320px" width="280px" />
          </div>
          <div className="team-about">
            I am a qualified beautician passionate about selfcare and all things
            beauty. I specialise in a variety of nail treatments such as Bulider
            gel, gel polish and gel toes. I am based at Utopia Hair Co. on
            Wednesdays, Thursdays and Fridays. All you have to do is sit back
            and relax!
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGirls;
