import React from "react";
import {useState} from "react";

import Intro from "./components/Intro.jsx";
import Songlist from "./components/Songlist.jsx";

export default function App() {
    return (
        <div class="App">
            <Intro />
            <Songlist/>
        </div>
    )
}