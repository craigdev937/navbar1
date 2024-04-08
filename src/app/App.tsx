import React from "react";
import "./App.css";
import Aaron from "/Aaron.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Aaron} alt="Aaron Wahl"
                height="500px" width="auto" 
            />
        </React.Fragment>
    );
};


