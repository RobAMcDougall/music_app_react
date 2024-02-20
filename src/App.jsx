import React from "react";
import {useState} from "react";

import {Intro, Songlist} from "./components";


export default function App() {
    return (
        <div className="App">
            <Intro />
            <Songlist/>
        </div>
    )
}