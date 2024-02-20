import React from "react"
import { useState } from 'react'

export default function LikeButton({setFavourites, favourites, albumName}) {

    const [liked, updateLiked] = useState(false)

    const handleLikeButton = () => {

        updateLiked(prevState => !prevState)
        
        setFavourites([...favourites, albumName])

        // setToDos([...toDos, { text: inputText, completed: false }])

    }

    return (
        // 'LikeButton'
        <button type="button" onClick={handleLikeButton} className={liked ? 'LikeButton liked' : 'LikeButton'}>Like!</button>
    )
}

