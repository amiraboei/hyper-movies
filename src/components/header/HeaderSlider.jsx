import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import movie1 from "../../assets/SwiperImage/movie1.jfif";
import movie2 from "../../assets/SwiperImage/movie2.jfif";
import movie3 from "../../assets/SwiperImage/movie3.jfif";
import movie4 from "../../assets/SwiperImage/movie4.jfif";
import movie5 from "../../assets/SwiperImage/movie5.jfif";
import MoviesCadrt from "../movies/MoviesCadrt";

const images = [movie1, movie2, movie3, movie4, movie5];

const HeaderSlider = ({ setHoverBg , img }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6">

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          640: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => setHoverBg(image)}
            onMouseLeave={() => setHoverBg(null)}
          >
            <MoviesCadrt img={image} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default HeaderSlider;