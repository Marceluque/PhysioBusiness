import React from "react";
import "./button.css";


function Button({name}) {
    return(
        <button class="form-field button" type="submit">
            {name}
        </button>
    )
}

export default Button;