import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4"

const Cover = () => {
    return (
        <div class='cover-container'>
            <video class='video' src={coverVideo} autoPlay loop muted></video>
            <h1>Manero, Nahuel Agustin</h1>
            <p>Developer | Security | Content Web Creator | Team Builder</p>
        </div>
    )
}

export default Cover
