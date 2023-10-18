import React from "react";
import salon from "../imgs/salon5.jpeg";
import salonwash from "../imgs/utopiawash.jpeg";
import salon2 from "../imgs/salonmirrored.jpeg"
import exterior from "../imgs/exteriorstretch.png"

const SalonContent = () => {
  return (
    <div className="saloncontent-wrap">
      <div className-="salon-info-pics">
          <div className="salon-about-info-1">
          <p>
            Our salon is in a beautiful barn conversion on Clifton Fields, just
            outside of Freckleton, where we create a friendly and relaxed
            environment whilst giving you your dream hair.
          </p>
          <p>
            Utopia Hair Co is full accessible, with no stairs required. Free car parking is available and is no more than a minute's walk away on those rainy days.
          </p>
          </div>
        <div className="salon-pic-1">
          <img src={salon2} />
        </div>
      </div>
      <div className-="salon-info-pics">
        <div className="salon-about-info-2">
          <p>
            What started as solely a hairdressing salon soon evolved to include
            nail, lash and brow treatments.
          </p>
          <p>
            No matter the treatment you choose, you can be confident that Utopia
            Hair Co will provide you with the best results and the ultimate
            luxury experience.
          </p>
        </div>
        <div className="salon-pic-2">
          <img src={salon} />
        </div>
      </div>
      <div className="salon-about-info-3">
          <p>
            We take pride in our team's versatility and creativity, with our hair services catering across any age or hair type.
          </p>
          <p>
            Our artists are knowledgable and passionate, and offer a superior
            service guaranteed to satisfy everything their client wants from
            their treatment.
          </p>
          </div>
        <div className="salon-pic-3">
          <img src={salonwash} />
        </div>
      <div className="salon-exterior-text">
      <img className="utopia-exterior" src={exterior}/>
      <div className="salon-subtext">
            <p>
            A spa-like salon that is home to
              freelance artists Nicola, Alannah, Ellie, Maddie, Erin and Millie.
            </p>
      </div>
      </div>
    </div>
  );
};

export default SalonContent;
