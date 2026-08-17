import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";

import "swiper/css";

import movie1 from "../../assets/SwiperImage/movie1.jfif";
import movie2 from "../../assets/SwiperImage/movie2.jfif";
import movie3 from "../../assets/SwiperImage/movie3.jfif";
import movie4 from "../../assets/SwiperImage/movie4.jfif";
import movie5 from "../../assets/SwiperImage/movie5.jfif";
import MoviesCadrt from "../movies/MoviesCadrt";

const images = [movie1, movie2, movie3, movie4, movie5];

const HeaderSlider = ({ setHoverBg , img }) => {
  const[movies , setMovies] = useState([]);

  async function loadMovies(){
    const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a86e43b051140791676e0184277c09dc');
    setMovies(data.results);
  }

  useEffect(() => {
    loadMovies();

  },[])

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
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            onMouseEnter={() => setHoverBg(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`)}
          >
            <MoviesCadrt movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper> 

    </section>
  );
};

export default HeaderSlider;