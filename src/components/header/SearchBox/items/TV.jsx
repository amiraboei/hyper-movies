import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiKey = "a86e43b051140791676e0184277c09dc";
const baseUrl = "https://api.themoviedb.org/3";

const TV = () => {
    const { id } = useParams();
    const [tv, setTv] = useState(null);

    useEffect(() => {
        async function getTV() {
            try {
                const { data } = await axios.get(
                    `${baseUrl}/tv/${id}?api_key=${apiKey}`
                );

                setTv(data);
            } catch (error) {
                console.log(error);
            }
        }

        getTV();
    }, [id]);

    if (!tv) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{tv.name}</h1>
            <p>{tv.overview}</p>
        </div>
    );
};

export default TV;