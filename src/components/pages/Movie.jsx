import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import toast from 'react-hot-toast';

const apiKey = "a86e43b051140791676e0184277c09dc";
const baseUrl = "https://api.themoviedb.org/3";
const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const { user, session, login } = useContext(UserContext);


    async function handeleAddToWatchList(){
        const { data } = await axios.post(`${baseUrl}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,{
            media_type : "movie",
            media_id : movie.id,
            favorite :true}

        );
        toast.success(`${movie.title} has been aded your favoriteList!`)

    }


    async function loadMovie() {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a86e43b051140791676e0184277c09dc`);
        setMovie(data);
    }

    useEffect(() => {
        loadMovie();
    }, [id]);

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {movie ? (
                <div className="relative min-h-screen overflow-hidden">

                    {/* Background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-105"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                        }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/75" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30" />

                    {/* Content */}
                    <div className="relative z-10 min-h-screen flex items-center">
                        <div className="w-[90%] max-w-7xl mx-auto py-20">

                            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-start">

                                {/* Poster */}
                                <div className="w-[260px] sm:w-[300px] shrink-0">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-full rounded-2xl shadow-2xl shadow-black/70 border border-white/10"
                                    />
                                </div>

                                {/* Movie Info */}
                                <div className="flex-1 pt-2 text-center lg:text-left">

                                    <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-medium">
                                        MOVIE
                                    </span>

                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
                                        {movie.title}
                                    </h1>

                                    {movie.tagline && (
                                        <p className="text-lg text-zinc-400 italic mb-6">
                                            "{movie.tagline}"
                                        </p>
                                    )}

                                    {/* Rating / Date / Runtime */}
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-7">

                                        <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                                            ⭐ {movie.vote_average?.toFixed(1)}
                                        </div>

                                        <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                                            📅 {movie.release_date}
                                        </div>

                                        <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                                            🎬 {movie.runtime} min
                                        </div>

                                    </div>

                                    {/* Overview */}
                                    <p className="max-w-3xl text-zinc-300 text-base sm:text-lg leading-8 mb-8">
                                        {movie.overview}
                                    </p>

                                    {/* Genres */}
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                                        {movie.genres?.map((genre) => (
                                            <span
                                                key={genre.id}
                                                className="px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700 text-sm text-zinc-300"
                                            >
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">

                                        <button className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 transition duration-300 font-semibold shadow-lg shadow-red-600/20">
                                            ▶ Watch Now
                                        </button>

                                        <button className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-300 font-semibold backdrop-blur-sm" onClick={handeleAddToWatchList}>
                                            + Add to Watchlist
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-zinc-700 border-t-red-600 rounded-full animate-spin mx-auto mb-5"></div>
                        <h1 className="text-xl font-semibold text-zinc-400">
                            Loading...
                        </h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Movie;