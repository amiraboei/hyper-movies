import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import MoviesCadrt from "../movies/MoviesCadrt";


const MoviesListSlider = ({movies}) => {

    return (

        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            modules={[Pagination]}
            breakpoints={{
                0:{
                    slidesPerView:1,
                },
                640:{
                    slidesPerView:2,
                },
                768:{
                    slidesPerView:4,
                },
                1024:{
                    slidesPerView:6,
                },
            }}
        >
            {
                movies.map((img,index)=>(
                    <SwiperSlide key={index}>
                        <MoviesCadrt img={img}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}


export default MoviesListSlider;