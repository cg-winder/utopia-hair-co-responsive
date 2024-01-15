import React from "react";
import salon2 from "../imgs/utopiawash.jpeg"
import salonsolo from "../imgs/salonsolo.jpeg";
import mug from "../imgs/salonmug.jpeg"
import salon3 from "../imgs/salonmirrored.jpeg"


const SalonContent = () => {
  return (
    <div className="saloncontent-wrap">
        <div className="salon-about-info-1">
          <h2>welcome to utopia hair co</h2>
          <p>
           We are a spa-like salon based in a beautiful barn conversion on Clifton Fields, just
            outside of Freckleton. It is home to eight amazing freelance artists, who create a friendly and relaxed
            environment whilst giving you your dream hair.
          </p>
          </div>
          <div className="salon-about-info-2">
            <p>
              What started as solely a hairdressing salon soon evolved to include
              nail, lash and brow treatments. No matter the treatment you choose, you can be confident that Utopia
              Hair Co will provide you with the best results and the ultimate
              luxury experience.
            </p>
          </div>
          <div className="salon-about-info-3">
            <p>
              We take pride in our team's versatility and creativity, with our hair services catering across any age or hair type.  Our artists are knowledgable and passionate, and offer a superior
              service guaranteed to fulfill and exceed everything their client wants from
              their treatment.
            </p>
          </div>
    </div>
  );
};

export default SalonContent;
