import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const menu = [
        { id: 1, label: "Main", path: "./" },
        { id: 2, label: "Login", path: "./login" },
        { id: 3, label: "Users", path: "./users" }
    ];

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        {menu.map((item) => (
                            <li key={item.id} className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to={item.path}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
