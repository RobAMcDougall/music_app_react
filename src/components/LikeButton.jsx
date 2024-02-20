import React from "react"
import { useState } from 'react'

export default function LikeButton() {

    const [liked, updateLiked] = useState(false)

    const handleLikeButton = () => {

        updateLiked(prevState => !prevState)

        // function anonymousFunction(prevState) {
        //     return !prevState
        // }

    }

    return (
        // 'LikeButton'
        <button type="button" onClick={handleLikeButton} className={liked ? 'LikeButton liked' : 'LikeButton'}>Like!</button>
    )
}

