import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from "./Body";

const Principal = ({ cords }) => {
    const { latitude: lat, longitude: lon } = cords;
    const [weather, setWeather] = useState();
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        getWeather();
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, []);

    const getWeather = async () => {
        const key = "2e5c74699170f16e6f8353811f1a8108";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        const response = await axios.get(url);
        setWeather(response.data);
    };

    return (
        <div className="card-body">
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                weather && <Body weather={weather} />
            )}
        </div>
    );
};

export default Principal;
