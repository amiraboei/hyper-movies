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

const MoviesListSlider = ({ movies }) => {
    return (

        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
                delay: 4000,
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
                    slidesPerView: 4,
                },

                1024: {
                    slidesPerView: 6,
                },
            }}
        >
            {movies.map((img, index) => (
                <SwiperSlide
                    key={index}
                    onMouseEnter={() => setHoverBg(image)}
                    onMouseLeave={() => setHoverBg(null)}
                >
                    <MoviesCadrt img={img} />
                </SwiperSlide>
            ))}
        </Swiper>

  );
};

export default MoviesListSlider;