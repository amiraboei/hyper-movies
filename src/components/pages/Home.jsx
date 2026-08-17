import React, { useState } from 'react';
import MoviesCadrt from '../movies/MoviesCadrt';
import movie1 from "../../assets/SwiperImage/movie1.jfif";
import movie2 from "../../assets/SwiperImage/movie2.jfif";
import movie3 from "../../assets/SwiperImage/movie3.jfif";
import movie4 from "../../assets/SwiperImage/movie4.jfif";
import movie5 from "../../assets/SwiperImage/movie5.jfif";
import MoviesListSlider from "../main/MoviesListSlider"
import { RiMovie2Line } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { MdMovieEdit } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { MdTv } from "react-icons/md";
import Movies from './Movies';



const Home = () => {

    const [moviesActiveTab, setMoviesActiveTab] = useState("popular");
    const [watchType, setWatchType] = useState("movie");
    function handeleChangeMovieActiveTab(tab) {
        setMoviesActiveTab(tab);
    }

    const activeClass = (tab) => {
        return moviesActiveTab === tab
            ? "text-rose-500"
            : "text-white";
    };
    return (
        <div className="w-[70%] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className=' my-3'>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-white/10">
                    <div>
                        <span className="text-xs tracking-[3px] text-rose-500 uppercase">
                            Explore Movies
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                            Movies <span className="text-rose-500">Collection</span>
                        </h2>
                    </div>

                    <ul className="flex flex-wrap items-center gap-1 bg-black/30 rounded-xl p-1 border border-white/10 w-fit">
                        <li
                            onClick={() => handeleChangeMovieActiveTab("upcoming")}
                            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 ${moviesActiveTab === "upcoming" ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                        >
                            <BiMoviePlay size={18} />
                            Upcoming
                        </li>

                        <li
                            onClick={() => handeleChangeMovieActiveTab("now_playing")}
                            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 ${moviesActiveTab === "now_playing" ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                        >
                            <RiMovie2Line size={18} />
                            Now Playing
                        </li>

                        <li
                            onClick={() => handeleChangeMovieActiveTab("popular")}
                            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 ${moviesActiveTab === "popular" ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                        >
                            <BiCameraMovie size={18} />
                            Popular
                        </li>

                        <li
                            onClick={() => handeleChangeMovieActiveTab("top_rated")}
                            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 ${moviesActiveTab === "top_rated" ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                        >
                            <MdMovieEdit size={18} />
                            Top Rated
                        </li>
                    </ul>
                </div>
                <MoviesListSlider type="movie" activeTab={moviesActiveTab} />
            </div>
            <div className="my-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-white/10">
                    <div>
                        <span className="text-xs tracking-[3px] text-rose-500 uppercase">
                            Watch For Free
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                            Free To <span className="text-rose-500">Watch</span>
                        </h2>
                    </div>

                    <ul className="flex items-center gap-2 bg-black/30 rounded-xl p-1 border border-white/10 w-fit">
                        <li
                            onClick={() => setWatchType("movie")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${watchType === "movie"
                                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <MdLocalMovies size={18} />
                            Movie
                        </li>

                        <li
                            onClick={() => setWatchType("tv")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${watchType === "tv"
                                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <MdTv size={18} />
                            TV
                        </li>
                    </ul>
                </div>

                <div className="pt-6">
                    <MoviesListSlider type={watchType} activeTab="popular" />
                </div>
            </div>
        </div>
    );
}

export default Home;
