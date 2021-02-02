import React, { useState } from "react";
import "./navbar.css";

function navBar() {

    
    return (
      
        <nav>
            <a href="#home">Home</a>
            <ul>
                <li>
                    <a href="#home">Calendario</a>
                </li>
                <li>
                    <a href="#home">Citas</a>
                </li>
                <li>
                    <a href="#home">Expedientes</a>
                </li>
            </ul>
             <a href="#signout">Logout</a>
             
        </nav>

    
    )

}

export default navBar;