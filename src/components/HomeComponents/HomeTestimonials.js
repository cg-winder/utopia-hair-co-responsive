import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="testimonials-page-wrap">
      <div className="testimonials-header">Testimonials</div>
      <div className="testimonials-wrap-1">
        <div className="testimonial-1">
          <div className="testimonial-rating">
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
          </div>
          <div className="testimonial-comment">
            <p>
              {" "}
              Nicola is knowledgeable, professional and super friendly. My hair
              is stunning thank you.
            </p>{" "}
            If you are looking for an amazing colour technician then she is the
            one!
          </div>
          <div className="testimonial-name">Sophie E.</div>
        </div>
        <div className="testimonial-2">
          <div className="testimonial-rating">
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
          </div>
          <div className="testimonial-comment">
            <p>Nicola is an amazing hairdresser.</p> The salon is in a beautiful
            setting making the overall experience very relaxing.
          </div>
          <div className="testimonial-name" id="testimonial-name-2">
            Kirsty O.
          </div>
        </div>
        <div className="testimonial-3">
          <div className="testimonial-rating">
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
          </div>
          <div className="testimonial-comment">
            <p>
              Nicola always manages to transform my hair. She listens so
              carefully to what I’m after and nails it every time.{" "}
            </p>
            The salon is stunning and I can’t wait for my next visit.
          </div>
          <div className="testimonial-name" id="testimonial-name-3">
            Andrea O.
          </div>
        </div>
      </div>
      <div className="testimonials-wrap-2">
        <div className="testimonial-4">
          <div className="testimonial-rating">
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
          </div>
          <div className="testimonial-comment">
            <p>Beautiful salon.</p> Great advice on my hair.
          </div>
          <div className="testimonial-name">Kara G.</div>
        </div>
        <div className="testimonial-5">
          <div className="testimonial-rating">
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
            <i>
              <FontAwesomeIcon
                icon={faStar}
                beat
                style={{ color: "#E48EB4" }}
              />
            </i>
          </div>
          <div className="testimonial-comment">
            <p> Always a great experience.</p> I leave with healthy hair every
            time.
          </div>
          <div className="testimonial-name">Michelle H.</div>
        </div>
      </div>
      <div
        className="testimonal-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://www.fresha.com/a/nicola-utopia-hair-co-preston-clifton-fields-ensjjwax/modal/reviews?pId=833656";
        }}
      >
        ALL REVIEWS
      </div>
    </div>
  );
};

export default Testimonials;
