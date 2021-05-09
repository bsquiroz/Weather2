import React, { useState, useEffect } from "react";
import Principal from "./components/Principal";

function App() {
    const [cords, setcords] = useState();

    useEffect(() => {
        geoFindMe();
    }, []);

    const geoFindMe = () => {
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setcords({
                latitude,
                longitude,
            });
        }
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Weather Api</h1>
                {cords && <Principal cords={cords} />}
            </div>
        </div>
    );
}

export default App;
