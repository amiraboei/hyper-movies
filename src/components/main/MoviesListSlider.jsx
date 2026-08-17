import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";

import MoviesCadrt from "../movies/MoviesCadrt";

const apiKey = "a86e43b051140791676e0184277c09dc";
const baseUrl = "https://api.themoviedb.org/3";

const MoviesListSlider = ({ type, activeTab }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            try {
                const { data } = await axios.get(
                    `${baseUrl}/movie/${activeTab}?api_key=${apiKey}`
                );

                setMovies(data.results);
            } catch (error) {
                console.log("MOVIES ERROR:", error);
            }
        }

        getMovies();
    }, [activeTab]);

    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Pagination]}
            // pagination={{ clickable: true }}
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
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <MoviesCadrt movie={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MoviesListSlider;