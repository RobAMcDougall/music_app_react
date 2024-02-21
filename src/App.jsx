import React, { useEffect } from "react";
import { useState } from "react";

import { Intro, Songlist, FavList } from "./components";



export default function App() {

    const [favourites, setFavourites] = useState([
        "Sam's Town",
        "Hot Fuss",
        "Pressure Machine"
    ])

    useEffect(() => {
        console.log('in useEffect')
        const timeout = setTimeout(() => console.log("in setTimeout"))

        return (() => clearInterval(timer))
    },
        [favourites])


    return (
        <div className="App">
            <Intro />
            <FavList favourites={favourites} />
            <Songlist setFavourites={setFavourites} favourites={favourites} />
        </div>
    )
}