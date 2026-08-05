import React from 'react';
import MoviesCadrt from '../movies/MoviesCadrt';
import movie1 from "../../assets/SwiperImage/movie1.jfif";
import movie2 from "../../assets/SwiperImage/movie2.jfif";
import movie3 from "../../assets/SwiperImage/movie3.jfif";
import movie4 from "../../assets/SwiperImage/movie4.jfif";
import movie5 from "../../assets/SwiperImage/movie5.jfif";
import MoviesListSlider from './MoviesListSlider';
import { RiMovie2Line } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { MdMovieEdit } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { MdTv } from "react-icons/md";


const movies = [movie1 ,movie2 ,movie3 ,movie4 ,movie2 ,movie3 ,movie1]

const MoviesList = () => {
    return (
        <div className="w-[70%] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className=' my-3'>
                <div className='md:flex flex-row gap-10 items-center pb-5'>
                    <h2 className='text-2xl text-slate-300'>Whats Popular?</h2>
                    <ul className='flex flex-col gap-5 text-rose-300 md:flex-row'>
                        <li className='flex flex-row items-center gap-1'><BiMoviePlay className='text-rose-400'/> Streaming</li>
                        <li className='flex flex-row items-center gap-1'><RiMovie2Line className='text-rose-400'/> On Tv</li>
                        <li className='flex flex-row items-center gap-1'><BiCameraMovie className='text-rose-400'/> For Rent</li>
                        <li className='flex flex-row items-center gap-1'><MdMovieEdit className='text-rose-400'/>In Theaters</li>
                    </ul>
                </div>
                <MoviesListSlider movies={movies}  />
            </div>
                        <div className=' my-3'>
                <div className='md:flex flex-row gap-10 items-center pb-5'>
                    <h2 className='text-2xl text-slate-300'>Free To Whatch</h2>
                    <ul className='flex flex-col gap-5 text-rose-300 md:flex-row'>
                        <li className='flex flex-row items-center gap-1'><MdLocalMovies className='text-rose-400'/> movie</li>
                        <li className='flex flex-row items-center gap-1'><MdTv className='text-rose-400'/>Tv</li>
                    </ul>
                </div>
                <MoviesListSlider movies={movies}  />
            </div>
        </div>
    );
}

export default MoviesList;
