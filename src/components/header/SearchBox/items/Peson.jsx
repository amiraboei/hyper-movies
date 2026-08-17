import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiKey = "a86e43b051140791676e0184277c09dc";
const baseUrl = "https://api.themoviedb.org/3";

const Person = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        async function getPerson() {
            try {
                const { data } = await axios.get(
                    `${baseUrl}/person/${id}?api_key=${apiKey}`
                );

                setPerson(data);
            } catch (error) {
                console.log(error);
            }
        }

        getPerson();
    }, [id]);

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{person.name}</h1>
            <p>{person.biography}</p>
        </div>
    );
};

export default Person;