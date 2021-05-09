import React, { useState } from "react";

const Body = ({ weather }) => {
    const gradosK = weather.main.temp;
    const gradosC = (gradosK - 273.15).toFixed(2);
    const gradosF = (9 * (gradosC / 5) + 32).toFixed(2);

    const [degrees, setDegrees] = useState(true);

    const change = () => {
        setDegrees(!degrees);
    };

    const icon = weather.weather[0].icon;
    let srcIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <>
            <h2>
                {weather.sys.country} - {weather.name}
            </h2>
            <h4>{weather.weather[0].description}</h4>
            <img src={srcIcon} alt={icon} />
            {degrees ? <h5>{gradosC} °C</h5> : <h5>{gradosF} °F</h5>}
            <button onClick={() => change()}>Degrees °C/°F</button>
        </>
    );
};

export default Body;
