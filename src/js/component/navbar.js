import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        if (store.favorites.length > 0) {
            setIsDropdownOpen(true);
        } else {
            setIsDropdownOpen(false);
        }
    }, [store.favorites]);

    return (
        <nav className="navbar navbar-light container" style={{ borderBottom: "1px solid #2020207d" }}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-2 col-2">
                        <Link to="/">
                            <img
                                src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
                                className="card-img-top img-fluid"
                                style={{ filter: "contrast(40%) sepia(1) hue-rotate(20deg) saturate(1000%)" }}
                                alt="Star Wars Logo"
                            />
                        </Link>
                    </div>

                    <div className="col-md-6 col-6" />

                    <div className="col-md-2 col-2 d-flex justify-content-end align-items-right">
                        {/* <Link className="btn btn-warning me-3" to={{ pathname: `/login` }}>
                            Login
                        </Link> */}
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={handleToggleDropdown}
                            >
                                Favoritos <span className="counter">{store.favorites.length}</span>
                            </button>
                            <ul className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton1">
                                {store.favorites.map((item, index) => (
                                    <li className="text-dark d-flex justify-content-between" key={index}>
                                        {item}
                                        <span className="bean">
                                            <i className="fas fa-trash" onClick={() => actions.deleteFavorites(item)}></i>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
