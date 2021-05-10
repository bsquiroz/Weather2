import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from "./Body";

const Principal = ({ cords, valueForm }) => {
    const { latitude: lat, longitude: lon } = cords;
    const [weather, setWeather] = useState();
    const [loading, setloading] = useState(false);
    const [noFound, setNoFound] = useState(false);

    useEffect(() => {
        setloading(true);
        const getWeather = async () => {
            if (valueForm) {
                try {
                    const key = "2e5c74699170f16e6f8353811f1a8108";
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${valueForm}&appid=${key}`;
                    const response = await axios.get(url);
                    setWeather(response.data);
                    setNoFound(false);
                } catch (error) {
                    setNoFound(true);
                }
            } else {
                const key = "2e5c74699170f16e6f8353811f1a8108";
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
                const response = await axios.get(url);
                setWeather(response.data);
            }
        };
        getWeather();
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, [valueForm, lat, lon]);

    return (
        <div className="card-body">
            {noFound ? (
                <h2 className="error">Verifique el campo a buscar</h2>
            ) : loading ? (
                <h2>Cargando...</h2>
            ) : (
                weather && <Body weather={weather} />
            )}
        </div>
    );
};

export default Principal;
