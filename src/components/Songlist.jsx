import React from "react"

import LikeButton from "./LikeButton.jsx"


export default function Songlist() {
    return (
        <div className="SongList">
            <h2>Albums</h2>
            <ul>
                <li>
                    <div className="heading-group">
                        <h3>Hot Fuss</h3>
                        <LikeButton />
                    </div>
                    <span className="release-date">June 15th 2004</span>
                    <div className="image-container">
                        <img src="src/assets/The_Killers_-_Hot_Fuss.png" alt="" />
                    </div>
                </li>
                <li>
                    <div className="heading-group">
                        <h3>Sam's Town</h3>
                        <LikeButton />
                    </div>
                    <span className="release-date">October 3rd 2006</span>
                    <div className="image-container">
                        <img src="src/assets/Sam's_Town.jpeg" alt="" />
                    </div>
                </li>
                <li>
                    <div className="heading-group">
                        <h3>Day And Age</h3>
                        <LikeButton />
                    </div>
                    <span className="release-date">November 18th 2008</span>
                    <div className="image-container">
                        <img src="src/assets/The_Killers_-_Day_&_Age.png" alt="" />
                    </div>
                </li>
            </ul>
        </div>
    )
}