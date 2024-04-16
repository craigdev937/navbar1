import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
    const [burger_class, setBurgerClass] = React.useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = React.useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = React.useState(false);

    // Toggle Burger Menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        } else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <React.Fragment>
            <header className="header">
                <nav>
                    <ul className="burger-menu" onClick={updateMenu}>
                        <Link className={burger_class} to={"/"}>Films</Link>
                        <Link className={burger_class} to={"/shows"}>Shows</Link>
                        <Link className={burger_class} to={"/people"}>People</Link>
                    </ul>
                </nav>
                <div className={menu_class}></div>
            </header>
            <Outlet />
        </React.Fragment>
    );
};


