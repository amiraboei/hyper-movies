import React from 'react';
import { LiaStarSolid } from "react-icons/lia";
import movie1 from "../../assets/SwiperImage/movie1.jfif";
import { Link } from 'react-router-dom';

const MoviesCadrt = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`}>
            <div className='relative aspect-2/3 overflow-hidden rounded-xl'>

                <img
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    className='w-full h-full object-cover'
                    alt=""
                />
                <div className='absolute bottom-0 w-full p-4 text-white bg-black/50'>

                    <h3 className='truncate'>{movie.title}</h3>
                    <div className='flex items-center gap-1'>
                        <LiaStarSolid className='text-yellow-400' />
                        <span>{movie.vote_average.toFixed(1)} / 10</span>
                    </div>

                </div>

            </div>

        </Link>



    );
}

export default MoviesCadrt;