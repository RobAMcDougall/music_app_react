import React from "react"
export default function Songlist() {
    return (
        <div class="SongList">
            <h2>Albums</h2>
            <ul>
                <li>
                    <h3>Hot Fuss</h3>
                    <span class="release-date">June 15th 2004</span>
                    <div class="image-container">
                        <img src="src/assets/The_Killers_-_Hot_Fuss.png" alt="" />
                    </div>
                </li>
                <li>
                    <h3>Sam's Town</h3>
                    <span class="release-date">October 3rd 2006</span>
                    <div class="image-container">
                        <img src="src/assets/Sam's_Town.jpeg" alt="" />
                    </div>
                </li>
                <li>
                    <h3>Day And Age</h3>
                    <span class="release-date">November 18th 2008</span>
                    <div class="image-container">
                        <img src="src/assets/The_Killers_-_Day_&_Age.png" alt="" />
                    </div>
                </li>
            </ul>
        </div>
    )
}