
import instagramlogo from "/Users/chloewinder/Desktop/ /Code/Projects/utopia-hair-co-responsive/src/components/imgs/nav-icon3-instagram.svg"
import React from "react";
import nicola from "../imgs/nicolabw.png"
import alannah from "../imgs/final-alannah.png"
import erin from "../imgs/final-erin.png"
import ellie from "../imgs/final-ellie.png"
import gabrielle from "../imgs/gabrielle.jpeg"
import maddie from "../imgs/maddie.jpeg"
import millie from "../imgs/milliebw.png"


const TeamGirls = () => {
  return (
    <div className="teamgirls-wrap">
      <div className="team-girls">
        <div className="team-pic-name-flex">
                  <div className="team-pics">
                    <img src={nicola} id="nicola"/>
                  </div>
                  <div className="team-name-title">
                        <h2 className="team-h2">NICOLA</h2>
                        <div className="team-title">Owner & Hair Stylist</div>
                  </div>
                  </div>
                  <div className="team-buttons">
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
                    <div className="team-social-button">
                      <a href="https://www.instagram.com/nicola_utopiahairco/">
                        <img src={instagramlogo} alt="instagram-icon" />
                      </a>
                    </div>
                    <div className="treatment-type">
                        <span>HAIR</span>
                      </div>
                  </div>
          <div className="team-about">
          I’m Nicola, the face behind Utopia Hair Co!
As far as I can remember I’ve always wanted to be a hairdresser. I started my hairdressing journey working in salons from the age of 15 as a Saturday girl. Fast forward 10 years, I can’t believe I have opened the salon of my dreams in the most beautiful barn conversion. 
I’m so grateful to have built up such a lovely, loyal clientele that have turned into friends over the years. 
I offer tape and weft extensions to give you that full hair transformation. To book in for extensions come and see me in the salon for a consultation. 
I’m so blessed to be in a job I absolutely love, where I can bring my clients’ hair dreams to life. 
            <p className="team-specialise">Specialises in: free hand balayage, extensions and vivid
            hair colours but I love all aspects of hair! </p>
            <p className="team-hours">Find me in the salon: Tuesday - Friday 10am-6pm</p>
          </div>
      </div>

      <div className="team-girls">
      <div className="team-pic-name-flex">
              <div className="team-pics">
                  <img src={alannah} id="alannah"/>
                </div>
                <div className="team-name-title">
                        <h2 className="team-h2">ALANNAH</h2>
                        <div className="team-title">Hair Stylist</div>
                  </div>
            </div>
            <div className="team-buttons">
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
              <div className="team-social-button">
                <a href="https://www.instagram.com/alannahjepsonhair/">
                  <img src={instagramlogo} alt="instagram-icon" />
                </a>
              </div>
             
              <div className="treatment-type">
                  <span>HAIR</span>
                </div>
            </div>
          <div className="team-about">
          My name is Alannah, and I'm a hair stylist who found her true passion in the world of hair. I began my journey at Utopia Hair Co in April 2023, and it's been amazing! 
 What really sets me apart is my genuine love for what I do. I believe that hair isn't just about aesthetics, it's about helping people feel confident and happy with themselves. I'm not just here to style hair,  I'm here to build connections, understand your vision and bring it to life. I'm always striving to improve and stay on top of industry trends. So if you're looking for a skilled stylist with a passion for hair, I'm here to help you achieve your hair goals.
            <p className="team-specialise">Specialises in: blondes! I've always been fascinated by the beauty of blonde hair, and I've invested time in learning the latest techniques to ensure I can create the most stunning blonde looks. </p>
            <p className="team-hours">Find me in the salon: Tuesday & Thursday 9am-7pm</p>
          </div>
      </div>

      <div className="team-girls">
      <div className="team-pic-name-flex">
              <div className="team-pics">
                  <img src={ellie} id="ellie"/>
                </div>
                <div className="team-name-title">
                        <h2 className="team-h2">ELLIE</h2>
                        <div className="team-title">Hair Stylist</div>
                  </div>
            </div>
            <div className="team-buttons">
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
              <div className="team-social-button">
                <a href="https://www.instagram.com/creativehair_by_elliemonica/">
                  <img src={instagramlogo} alt="instagram-icon" />
                </a>
              </div>
            
              <div className="treatment-type">
                  <span>HAIR</span>
                </div>
            </div>
          <div className="team-about">
          Hi, I'm Ellie! Hairdressing became a passion of mine 7 years ago. I started from the very bottom as an apprentice and have worked my way through the ranks. After learning all the skills and science behind everything hair, I am now self employed working in a gorgeous relaxing salon alongside likeminded and passionate freelance artists. 
            <p className="team-specialise">Specialises in: anything CREATIVE! This can be vibrant colours, unique hair styles and also wedding and occasion hair.</p>
            <p className="team-hours">Find me in the salon: Thursday & Friday 10am-7pm</p>
          </div>
      </div>

      <div className="team-girls">
        <div className="team-pic-name-flex">
                  <div className="team-pics">
                    <img src={gabrielle} id="nicola"/>
                  </div>
                  <div className="team-name-title">
                        <h2 className="team-h2">GABRIELLE</h2>
                        <div className="team-title">Hair Stylist</div>
                  </div>
                  </div>
                  <div className="team-buttons">
                  <button
                      className="team-book-now-button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.fresha.com/a/hair-by-gabrielle-clifton-uk-hzflak1l/booking?menu=true";
                      }}
                    >
                      BOOK WITH GABRIELLE
                    </button>
                    <div className="team-social-button">
                      <a href="https://www.instagram.com/hairrbygabrielle_/">
                        <img src={instagramlogo} alt="instagram-icon" />
                      </a>
                    </div>
                    <div className="treatment-type">
                        <span>HAIR</span>
                      </div>
                  </div>
          <div className="team-about">
          Hi I'm Gabrielle! I’m a hairstylist with over five years experience. I have previously worked at Toni&Guy, which is also where I trained.
I love creating seamless balayages, beautiful blondes and brunettes. I’m so excited to be working in this beautiful salon for all my lovely clients.
            <p className="team-specialise">Specialises in: balayages and lived-in colours. </p>
            <p className="team-hours">Find me in the salon: Tuesday & Saturday</p>
          </div>
      </div>

      <div className="team-girls">
        <div className="team-pic-name-flex">
                  <div className="team-pics">
                    <img src={gabrielle} id="nicola"/>
                  </div>
                  <div className="team-name-title">
                        <h2 className="team-h2">TIFFANY</h2>
                        <div className="team-title">Hair Stylist</div>
                  </div>
                  </div>
                  <div className="team-buttons">
                  <button
                      className="team-book-now-button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.instagram.com/hairrbygabrielle_/";
                      }}
                    >
                      BOOK WITH TIFFANY
                    </button>
                    <div className="team-social-button">
                      <a href="https://www.instagram.com/hairrbygabrielle_/">
                        <img src={instagramlogo} alt="instagram-icon" />
                      </a>
                    </div>
                    <div className="treatment-type">
                        <span>HAIR</span>
                      </div>
                  </div>
          <div className="team-about">
          Hi I'm Gabrielle! I’m a hairstylist with over five years experience. I have previously worked at Toni&Guy, which is also where I trained.
I love creating seamless balayages, beautiful blondes and brunettes. I’m so excited to be working in this beautiful salon for all my lovely clients.
            <p className="team-specialise">Specialises in: balayages and lived-in colours. </p>
            <p className="team-hours">Find me in the salon: Tuesday & Saturday</p>
          </div>
      </div>


      <div className="team-girls">
      <div className="team-pic-name-flex">
            <div className="team-pics">
                  <img src={maddie} id="maddie"/>
                </div>
                <div className="team-name-title">
                        <h2 className="team-h2">MADDIE</h2>
                        <div className="team-title">Level 2 Hair Apprentice</div>
                  </div>
            </div>
            <div className="team-buttons">
            <button
                className="team-book-now-button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://www.fresha.com/a/beauty-by-erin-obrien-clifton-uk-sqfh9xvb?pId=833656";
                }}
              >
                BOOK WITH MADDIE
              </button>
              <div className="team-social-button">
                <a href="https://www.instagram.com/maddie_utopiahairco/?img_index=1">
                  <img src={instagramlogo} alt="instagram-icon" />
                </a>
              </div>
              <div className="treatment-type">
                  <span>HAIR</span>
                </div>
            </div>
          <div className="team-about">
          Hi! My name is Maddie. I have recently started my hairdressing apprenticeship at college, and I'm currently a level 2 apprentice. I have always dreamed of being a hairdresser and now my dream is becoming a reality at Utopia Hair Co.
              <p className="team-specialise">Specialises in: a curly blowdry!</p>
              <p className="team-hours">Find me in the salon: </p>
          </div>
        </div>

    

      <div className="team-girls">
      <div className="team-pic-name-flex">
            <div className="team-pics">
                  <img src={erin} id="erin"/>
                </div>
                <div className="team-name-title">
                        <h2 className="team-h2">ERIN</h2>
                        <div className="team-title">Nail, Lash & Brow Specialist</div>
                  </div>
             </div>
            <div className="team-buttons">
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
              <div className="team-social-button">
                <a href="https://www.instagram.com/beautybyerinobrien/">
                  <img src={instagramlogo} alt="instagram-icon" />
                </a>
              </div>
             
              <div className="treatment-type-erin">
                  <span>NAILS, LASHES & BROWS</span>
                </div>
            </div>
          <div className="team-about">
          Hi I'm Erin. I have always been interested in the beauty world from a young age. This led me to decide to train as a beauty therapist straight from school, and a few years down the line I made the jump to being self employed in the most amazing salon. 
I offer a wide range of treatments across nails, lashes and brows!
            <p className="team-specialise">Specialises in: biab (builder in a bottle) nails. Helping my clients grow their natural nails and seeing their journey is very rewarding and satisfying.</p>
            <p className="team-hours">Find me in the salon: Tuesday 12pm-7pm, Wednesday & Thursday 9am-7pm, Friday 10am-6pm</p>
          </div>
        </div>

        <div className="team-girls">
      <div className="team-pic-name-flex">
            <div className="team-pics">
                  <img src={millie} id="millie"/>
                </div>
                <div className="team-name-title">
                        <h2 className="team-h2">MILLIE</h2>
                        <div className="team-title">Brow Specialist</div>
                  </div>
            </div>
            <div className="team-buttons">
            <button
                className="team-book-now-button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://www.fresha.com/a/nicola-at-utopia-hair-co-clifton-preston-uk-clifton-fields-lytham-road-y7md8eke/booking?employeeId=2774839";
                }}
              >
                BOOK WITH MILLIE
              </button>
              <div className="team-social-button">
                <a href="https://www.instagram.com/browsbymillierasdale/">
                  <img src={instagramlogo} alt="instagram-icon" />
                </a>
              </div>
              <div className="treatment-type">
                  <span>BROWS</span>
                </div>
            </div>
          <div className="team-about">
 Hi I'm Millie! I am a newly qualified brow specialist. I decided to take my love for brows and make it my dream job. I can't wait to meet my clients and start your brow journey together.
              <p className="team-specialise">Specialises in:  </p>
              <p className="team-hours">Find me in the salon: </p>
          </div>
        </div>
    </div>
  );
};

export default TeamGirls;
