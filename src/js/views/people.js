import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
    const { store, actions } = useContext(Context);

    const { people, favorites } = store;

    const imagePeopleUrls = [
        "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
        "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536",
        "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
        "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720",
        "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
        "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593",
        "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527",
        "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666",
        "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",
        "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",
    ];

    useEffect(() => {
        actions.getPeople();
    }, []);

    return (
        <>
            <br />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <span className="container-title text-gradient text-center"> CHARACTERS </span>
                    </div>
                </div>

                <div className="row overflow-auto">
                    <div className="col-12 d-flex flex-row gap-3" style={{ width: `${people.length * 100}%` }}>
                        {people.length > 0 && people.map((item, index) => (
                            <div key={index} className="col-md-4 col-sm-6 col-12 mb-3">
                                <div className="card">
                                    <img src={imagePeopleUrls[index % imagePeopleUrls.length]} style={{ objectFit: "contain" }} className="card-img-top" alt="Images of characters" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.result.properties.name}</h5>

                                        <div>
                                            <p className="card-text"><b>Height:</b> {item.result.properties.height}</p>
                                            <p className="card-text"><b>Mass:</b> {item.result.properties.mass}</p>
                                            <p className="card-text"><b>Gender:</b> {item.result.properties.gender}</p>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to={{ pathname: `/peopledetails/${item.result.uid}` }}>
                                                <button className="btn btn-secondary mt-2">
                                                    Learn More!
                                                </button>
                                            </Link>

                                            <button
                                                type="button"
                                                className={`btn ${favorites.includes(item.result.properties.name) ? 'btn-warning' : 'btn-outline-warning'} mt-2`}
                                                onClick={() => {
                                                    const isFavorite = favorites.includes(item.result.properties.name);
                                                    if (isFavorite) {
                                                        actions.deleteFavorites(item.result.properties.name);
                                                    } else {
                                                        actions.addFavorites(item.result.properties.name);
                                                    }
                                                }}>
                                                <i className="fas fa-heart" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
