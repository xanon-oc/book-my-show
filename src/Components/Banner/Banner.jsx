import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="relative">
      <div className="">
        <Swiper
          slidesPerView={4}
          navigation={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-[30.5rem]"
        >
          <div className="">
            <SwiperSlide>
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/406/1015647.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/128/321026.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/24/60454.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg"
                alt=""
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img src={Banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Banner2} alt="" />
            </SwiperSlide> */}
          </div>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
