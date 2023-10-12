import React from 'react'


const Testimonials = () => {
  return (
    <div className="testimonial-wrap">
        <div className="testimonials-header">Share about your hair</div>
<div className="slider">
  <input type="radio" name="slider" id="slide1" className="slider-nav"  />
  <input type="radio" name="slider" id="slide2" className="slider-nav"/>
  <input type="radio" name="slider" id="slide3" className="slider-nav"/>
  <input type="radio" name="slider" id="slide4" className="slider-nav"/>
  <input type="radio" name="slider" id="slide5" className="slider-nav"/>
  <input type="radio" name="slider" id="slide6" className="slider-nav"/>
  <div className="slider-inner">
    <div className="slider-contents">
      <h2 className="slider-caption">Sophie E.</h2>
      <p className="slider-text">Nicola is knowledgeable, professional and super friendly. My hair
              is stunning thank you.
            If you are looking for an amazing colour technician then she is the
            one!</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Kirsty O.</h2>
      <p className="slider-text"> Nicola is an amazing hairdresser. The salon is in a beautiful
            setting making the overall experience very relaxing.</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Andrea O.</h2>
      <p className="slider-text">Nicola always manages to transform my hair. She listens so
              carefully to what I’m after and nails it every time.
            The salon is stunning and I can’t wait for my next visit.</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Kara G.</h2>
      <p className="slider-text">Beautiful salon. Great advice on my hair.</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Michelle H.</h2>
      <p className="slider-text">Always a great experience. I leave with healthy hair every
            time.</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Abigail T.</h2>
      <p className="slider-text">Always a friendly and lovely atmosphere with Nicola and she knows what’s she’s doing when it comes to hair! Wouldn’t trust anyone else touching my hair.</p>
    </div>
    
  </div>
</div>
<div
        className="testimonial-link"
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://www.fresha.com/a/nicola-utopia-hair-co-preston-clifton-fields-ensjjwax/modal/reviews?pId=833656";
        }}
      >
        ALL REVIEWS
      </div>
    </div>
  )
}

export default Testimonials;
