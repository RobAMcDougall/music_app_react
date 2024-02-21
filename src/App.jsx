import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'


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
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='about' element={<Intro />} />

                <Route path='albums' element={<Songlist setFavourites={setFavourites} favourites={favourites} />} />

                {/* <FavList favourites={favourites} /> */}
                {/* <Songlist setFavourites={setFavourites} favourites={favourites} /> */}
            </Routes>
        </div>
    )




    //         < div className = "App" >
    //             {/* <Nav /> */ }
    //             < Routes >
    //             <Route path='/' element={<Nav />} >
    //                 <Route index element={<Home />} />
    //                 <Route path='about' element={<About />} />
    //                 <Route path='shop'>
    //                     <Route index element={<Shop />} />
    //                     <Route path=':id' element={<ShopItem />} />
    //                 </Route>
    //                 <Route path='*' element={<h1>Not found</h1>} />
    //             </Route>
    //     </Routes >
    //   </div >
}