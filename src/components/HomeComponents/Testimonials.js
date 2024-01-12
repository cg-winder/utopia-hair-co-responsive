import React from 'react'


const Testimonials = () => {
  return (
    <div className="testimonial-wrap">
        <div className="testimonials-header">Share about your hair</div>
<div className="slider">
  <input type="radio" name="slider" id="slide1" className="slider-nav"/>
  <input type="radio" name="slider" id="slide2" className="slider-nav"/>
  <input type="radio" name="slider" id="slide3" className="slider-nav"/>
  <input type="radio" name="slider" id="slide4" className="slider-nav"/>
  <input type="radio" name="slider" id="slide5" className="slider-nav"/>
  <input type="radio" name="slider" id="slide6" className="slider-nav"/>
  <input type="radio" name="slider" id="slide7" className="slider-nav"/>
  <input type="radio" name="slider" id="slide8" className="slider-nav"/>
  <input type="radio" name="slider" id="slide9" className="slider-nav"/>
  <input type="radio" name="slider" id="slide10" className="slider-nav"/>
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
      <h2 className="slider-caption">Chelsea E.</h2>
      <p className="slider-text">My first visit with Ellie, she did exactly what I wanted and was very professional throughout! My colours look fab and very vibrant, will be returning!</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Gillian C.</h2>
      <p className="slider-text">Nicola is a very talented professional, friendly and approachable owner/hairdresser and has a friendly team. The setting is beautiful and the team are in great demand, highlighting their own individual capabilities.</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Chantelle.</h2>
      <p className="slider-text">Erin is a lovely girl with lots of patience when I changed my mind about adding extra glitter to my nail design. Also great with LVL lashes and brows too.</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Abigail T.</h2>
      <p className="slider-text">Always a friendly and lovely atmosphere with Nicola and she knows what’s she’s doing when it comes to hair! Wouldn’t trust anyone else touching my hair.</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Sarah R.</h2>
      <p className="slider-text">My hair looks beautiful again. Gorgeous chilled salon, good chats with Nicola and great coffee and cake!</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Alycia M.</h2>
      <p className="slider-text">I have been going to Erin for a while now for my nails and she always goes above and beyond! Really takes her time to ensure that they’re as I want them. She is such a lovely girl and I wouldn’t go anywhere else.</p>
    </div>
    <div className="slider-contents">
      <h2 className="slider-caption">Lesley T.</h2>
      <p className="slider-text">Grateful for friendly and professional advice from Ellie following initial consultation. Very happy with both colour and cut. Lovely salon.</p>
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
