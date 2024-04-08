import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <Link to={"/"}><h1>NAVBAR</h1></Link>
                <ul>
                    <Link to={"/"}>Films</Link>
                    <Link to={"/shows"}>Shows</Link>
                    <Link to={"/people"}>People</Link>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


