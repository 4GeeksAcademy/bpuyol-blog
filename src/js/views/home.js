import React from "react";
import "../../styles/home.css";
import { People } from "./people";
import { Planets } from "./planets";
import { Starships } from "./starships";


export const Home = () => {
    return (

        <div className=" particles-js base container-fluid">
            <People />
            <Planets />
            <Starships />
        </div>
    );
};

