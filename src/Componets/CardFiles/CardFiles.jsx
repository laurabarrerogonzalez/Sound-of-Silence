import React, { useRef, useState } from "react";
import "../CardFiles/CardFiles.css";


const Card = ({ videoSrc, audioSrc, title, description }) => {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioPlayed, setAudioPlayed] = useState(false);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
        if (!audioPlayed && audioRef.current) {
            audioRef.current.play();
            setAudioPlayed(true);
        }
        setIsPlaying(true);
    };

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
    };

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    return (
        
        <div className="card" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
            <div className="imgBx">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    alt=""
                    onEnded={handleVideoEnd}
                    muted
                />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
                <audio ref={audioRef} controls>
                    <source src={audioSrc} type="audio/mpeg" />
                    Tu navegador no admite el elemento de audio.
                </audio>
            </div>
        </div>
    );

};

export default Card;