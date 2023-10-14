import React, { useRef, useState } from "react";
import "../CardFiles/CardFiles.css";

const Card = ({ card, handleEdit, handleDelete }) => {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        if (!isPlaying) {
            if (videoRef.current) {
                videoRef.current.play().catch(error => {
                    console.error("Error al reproducir el video:", error);
                });
                setIsPlaying(true);
            }
        }
    };

    const pauseVideo = () => {
        if (isPlaying) {
            if (videoRef.current) {
                videoRef.current.pause();
            }
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            setIsPlaying(false);
        }
    };

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    return (
        <div className="card"
            onMouseEnter={() => playVideo()}
            onMouseLeave={() => pauseVideo()}
        >
            <div className="imgBx">
                <video
                    ref={videoRef}
                    src={card.videoSrc}
                    loop
                    muted
                    playsInline
                    preload="none"  // Cambiar preload a "none" para evitar la carga automática
                    poster={card.videoSrc}
                    onEnded={handleVideoEnd}
                />
            </div>
            <div className="content">
                <h2 style={{ marginTop: '2px' }}>{card.title}</h2>
                <p style={{ marginBottom: '30px' }}>{card.description}</p>
                <audio ref={audioRef} controls style={{ margin: '0' }}>
                    <source src={card.audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                {handleEdit && handleDelete ? (
                    <div>
                        <button className="edit" onClick={() => handleEdit(card.id_AudioFiles)}>
                            Edit
                        </button>
                        <button className="delete" onClick={() => handleDelete(card.id_AudioFiles)}>
                            Delete
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Card;