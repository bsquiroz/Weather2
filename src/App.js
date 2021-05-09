import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Principal from "./components/Principal";

function App() {
    const [cords, setcords] = useState();
    const [valueForm, setvalueForm] = useState();

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
            <Form setvalueForm={setvalueForm} />
            <div className="card">
                <h1>Weather Api</h1>
                {cords && <Principal cords={cords} valueForm={valueForm} />}
            </div>
        </div>
    );
}

export default App;
