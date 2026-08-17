import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiKey = "a86e43b051140791676e0184277c09dc";
const baseUrl = "https://api.themoviedb.org/3";

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function getMovie() {
            try {
                const { data } = await axios.get(
                    `${baseUrl}/movie/${id}?api_key=${apiKey}`
                );

                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        }

        getMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    );
};

export default Movie;