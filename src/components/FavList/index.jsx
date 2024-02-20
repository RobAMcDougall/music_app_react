import React from 'react'

export default function FavList({ favourites }) { // destructuring assignment 
    return (
        <ul className>
            {favourites.map(favourite => <li>{favourite}</li>)}  
        </ul>
    )
}