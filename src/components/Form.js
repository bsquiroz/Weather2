import React, { useState } from "react";

const initial_place = "";

const Form = ({ setvalueForm }) => {
    const [place, setPlace] = useState(initial_place);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (place.trim() === "") {
            alert("este campo es necesario");
            return;
        }
        setvalueForm(place);
        setPlace(initial_place);
    };

    const handleInput = (e) => {
        setPlace(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ingresa una ciudad"
                onChange={(e) => handleInput(e)}
                value={place}
            />
        </form>
    );
};

export default Form;
