import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/bundle";
import salon1 from "../imgs/salonmirrored.jpeg";
import salon2 from "../imgs/salonmug.jpeg";
import salon3 from "../imgs/utopiawash.jpeg";
import salon4 from "../imgs/salonsolo.jpeg";
import salon5 from "../imgs/salon5.jpeg";
import salon6 from "../imgs/salonpic3.jpeg";
import salon7 from "../imgs/salon.jpeg";
import salon8 from "../imgs/exteriorUtopia.jpeg";
import salon9 from "../imgs/utopialashbed.jpeg";

const SalonCarousel = () => {
  return (
    <div className="salon-carousel-wrap">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        autoplay
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>
            <img src={salon1} alt="salon-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={salon2} alt="salon-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={salon3} alt="salon-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={salon4} alt="salon-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={salon5} alt="salon-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={salon6} alt="salon-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={salon7} alt="salon-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={salon8} alt="salon-slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={salon9} alt="salon-slide" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SalonCarousel;
