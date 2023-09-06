import React from "react";
import salonmug from "../imgs/salonmug.jpeg";
import salonwash from "../imgs/utopiawash.jpeg";

const SalonContent = () => {
  return (
    <div className="salon-whole">
      <div className-="salon-info-pics">
        <div className="salon-about-info-1">
          <p>
            Welcome to Utopia Hair Co... A spa-like salon that is home to
            freelance artists Nicola, Alannah, Ellie and Erin.
          </p>
          <p>
            Our salon is in a beautiful barn conversion on Clifton Fields, just
            outside of Freckleton, where we create a friendly and relaxed
            environment whilst giving you your dream hair.
          </p>
          <p>
            Our artists are knowledgable and passionate, and offer a superior
            service guaranteed to satisfy everything their client wants from
            their treatment.
          </p>
        </div>
        <div className="salon-pic-1">
          <img src={salonwash} />
        </div>
      </div>
      <div className-="salon-info-pics">
        <div className="salon-about-info-2">
          <p>
            What started as solely a hairdressing salon soon evolved to include
            nail, lash and brow treatments.
          </p>
          <p>
            Straight forward cut and blow, or a full head highlights? Lash tint
            and lift or full Russian lash extensions? Short gel nails or long
            French manicure?
          </p>
          <p>
            No matter the treatment you choose, you can be confident that Utopia
            Hair Co will provide you with the best result and the ultimate
            luxury experience.
          </p>
        </div>
        <div className="salon-pic-2">
          <img src={salonmug} />
        </div>
      </div>
    </div>
  );
};

export default SalonContent;
