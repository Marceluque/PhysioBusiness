import React from "react";

function Input({onChange, value, placeholder}) {
    return( 
        <>
            <input
              onChange={onChange}
              value={value}
              id="first-name"
              class="form-field"
              type="text"
              placeholder={placeholder}
              name="firstName"
            />
        </>  
    );
}

export default Input;