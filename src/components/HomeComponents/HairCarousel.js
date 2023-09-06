import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/bundle";
import hair1 from "../imgs/hair1.jpeg";
import hair2 from "../imgs/hair2.jpeg";
import hair3 from "../imgs/hair3.jpeg";
import hair4 from "../imgs/hair4.jpeg";
import hair5 from "../imgs/hair5.jpeg";
import hair6 from "../imgs/hair6.jpeg";
import hair7 from "../imgs/hair7.jpeg";
import hair9 from "../imgs/hair8.jpeg";
import hair10 from "../imgs/hair9.jpeg";
import hair11 from "../imgs/hair10.jpeg";
import hair12 from "../imgs/hair11.jpeg";
import hair13 from "../imgs/hair12.jpeg";
import hair14 from "../imgs/hair13.jpeg";
import hair15 from "../imgs/hair14.jpeg";
import hair16 from "../imgs/hair15.jpeg";
import hair17 from "../imgs/hair16.jpeg";
import hair18 from "../imgs/hair17.jpeg";
import hair19 from "../imgs/hair18.jpeg";
import hair20 from "../imgs/hair19.jpeg";
import hair21 from "../imgs/hairvc.jpeg";
import hair22 from "../imgs/hair22.jpeg";
import hair23 from "../imgs/hair23.jpeg";
import hair24 from "../imgs/hair24.jpeg";

const HairCarousel = () => {
  return (
    <div className="hair-carousel-wrap">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={2}
        slidesPerView={4}
        // navigation
        // pagination={{ clickable: true }}
        autoplay
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>
            <img src={hair1} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair2} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair3} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair4} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair19} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair6} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair7} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair9} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair10} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair11} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair12} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair13} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair14} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair15} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair16} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair17} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair18} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair20} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair21} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair22} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair23} alt="hair-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={hair24} alt="hair-slide" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HairCarousel;
