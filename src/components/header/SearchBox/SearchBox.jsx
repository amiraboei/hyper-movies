import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const apiKey = "a86e43b051140791676e0184277c09dc";
const baseUrl = "https://api.themoviedb.org/3";

const SearchBox = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    async function search() {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        try {
            const { data } = await axios.get(
                `${baseUrl}/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}&include_adult=false`
            );

            const filteredResults = (data.results || []).filter(
                (item) =>
                    item.media_type === "movie" ||
                    item.media_type === "tv" ||
                    item.media_type === "person"
            );

            setResults(filteredResults);
        } catch (error) {
            console.log("SEARCH ERROR:", error.response?.data);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            search();
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    function getLink(item) {
        if (item.media_type === "movie") {
            return `/movie/${item.id}`;
        }

        if (item.media_type === "tv") {
            return `/tv/${item.id}`;
        }

        if (item.media_type === "person") {
            return `/person/${item.id}`;
        }

        return "#";
    }

    function getTitle(item) {
        if (item.media_type === "person") {
            return item.name;
        }

        return item.title || item.name;
    }

    function getImage(item) {
        if (item.poster_path) {
            return `https://image.tmdb.org/t/p/w92${item.poster_path}`;
        }

        if (item.profile_path) {
            return `https://image.tmdb.org/t/p/w92${item.profile_path}`;
        }

        return "https://via.placeholder.com/92x138?text=No+Image";
    }

    function getType(item) {
        if (item.media_type === "movie") {
            return "Movie";
        }

        if (item.media_type === "tv") {
            return "TV Show";
        }

        if (item.media_type === "person") {
            return "Person";
        }
    }

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-4 text-slate-100">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search movies, TV shows, people..."
                    className="w-full bg-slate-700/90 border-2 border-slate-500 rounded-xl outline-none py-3 pl-4 pr-12 text-base sm:text-lg lg:text-xl focus:border-rose-500 transition"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <CiSearch
                    size={28}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                />

                {results.length > 0 && (
                    <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl max-h-[400px] overflow-y-auto">
                        {results.slice(0, 8).map((item) => (
                            <Link
                                key={`${item.media_type}-${item.id}`}
                                to={getLink(item)}
                                onClick={() => {
                                    setQuery("");
                                    setResults([]);
                                }}
                                className="flex items-center gap-4 p-3 hover:bg-white/10 transition"
                            >
                                <img
                                    src={getImage(item)}
                                    alt={getTitle(item)}
                                    className="w-12 h-16 object-cover rounded-md shrink-0"
                                />

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-white font-semibold truncate">
                                        {getTitle(item)}
                                    </h3>

                                    <p className="text-xs text-rose-400 mt-1">
                                        {getType(item)}
                                    </p>

                                    {item.media_type === "person" ? (
                                        <p className="text-sm text-slate-500 mt-1 truncate">
                                            {item.known_for_department || "Actor"}
                                        </p>
                                    ) : (
                                        <p className="text-sm text-slate-500 mt-1">
                                            {(
                                                item.release_date ||
                                                item.first_air_date
                                            )
                                                ? (
                                                      item.release_date ||
                                                      item.first_air_date
                                                  ).slice(0, 4)
                                                : "Unknown"}
                                        </p>
                                    )}

                                    {item.media_type !== "person" && (
                                        <p className="text-sm text-yellow-400 mt-1">
                                            ⭐ {item.vote_average?.toFixed(1)}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {query.trim() && results.length === 0 && (
                    <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-zinc-900 border border-white/10 rounded-xl p-5 text-center text-slate-500">
                        No results found
                    </div>
                )}
            </div>
        </section>
    );
};

export default SearchBox;