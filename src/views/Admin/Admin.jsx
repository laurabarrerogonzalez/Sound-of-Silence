import React from "react";
import './Admin.css';
import Card from "../../Componets/Header/CardFiles";

const Admin = () => {

    return (
        <div className="bodyadmin">
        <div className="container-admin">
            <Card
                videoSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1695722863/637948938_1_uthtjl.mp4"
                audioSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696063599/playa_2_hgfkin.mp3"
                title="The Sea"
                description="The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep."
            />

            <Card
                videoSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696151426/nature_-_105936_1080p_jc1doo.mp4"
                audioSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696155894/footsteps-in-water-nature-sounds-8185_faw0bz.mp3"
                title="Lake"
                description="The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep."
            />
            <Card
                videoSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696155395/waterfall_-_63283_1080p_mg5zt7.mp4"
                audioSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696155707/calm-river-ambience-loop-125071_x7bgja.mp3"
                title="Waterfall"
                description="The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep."
            />
            <Card
                videoSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696155403/guitarist_-_139_720p_xdiwq4.mp4"
                audioSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696155702/acoustic-guitar-short-intro-ish-live-recording-163329_rhxccp.mp3"
                title="Guitar"
                description="The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep."
            />
            <Card
                videoSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696168640/134486_720p_dgwxuv.mp4"
                audioSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696168635/the-last-piano-112677_hjvufn.mp3"
                title="Piano"
                description="The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep."
            />
            <Card
                videoSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696168638/vienna_-_13394_720p_a8bdgl.mp4"
                audioSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696168634/ethnic-violin-64897_dnciby.mp3"
                title="Violin"
                description="The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep."
            />
            <Card
                videoSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696168637/accordion_-_33103_720p_new4cm.mp4"
                audioSrc="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696168635/accordion-54979_gkmrvl.mp3"
                title="Acordeon"
                description="The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep."
            />
        </div>
        </div>
    );
};

export default Admin;

// document.body.classList.add('admin-arm');

// import React, { useRef, useState } from "react";
// import './Subscribe.css';

// const Subscribe = () => {
//     // Refs para el video y el audio
//     const videoRef = useRef(null);
//     const audioRef = useRef(null);
//     // Estado para controlar la reproducción del video
//     const [isPlaying, setIsPlaying] = useState(false);
//     // Estado para rastrear si el audio ya se ha reproducido
//     const [audioPlayed, setAudioPlayed] = useState(false);

//     // Función para reproducir el video y el audio
//     const playVideo = () => {
//         if (videoRef.current) {
//             videoRef.current.play();
//         }
//         if (!audioPlayed && audioRef.current) {
//             audioRef.current.play();
//             setAudioPlayed(true); // Marca que el audio se ha reproducido al menos una vez
//         }
//         setIsPlaying(true);
//     };

//     // Función para pausar el video y el audio y reiniciar el audio
//     const pauseVideo = () => {
//         if (videoRef.current) {
//             videoRef.current.pause();
//         }
//         if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current.currentTime = 0; // Reinicia la posición del audio
//         }
//         setIsPlaying(false);
//     };

//     // Función para reiniciar el video cuando se completa
//     const handleVideoEnd = () => {
//         if (videoRef.current) {
//             videoRef.current.currentTime = 0; // Reinicia el tiempo de reproducción del video
//             videoRef.current.play(); // Reproduce el video nuevamente
//         }
//     };

//     return (
//         <div className="container">
//             <div className="card" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
//                 <div className="imgBx">
//                     <video
//                         ref={videoRef}
//                         src="https://res.cloudinary.com/dp7lr71t8/video/upload/v1695722863/637948938_1_uthtjl.mp4"
//                         alt=""
//                         onEnded={handleVideoEnd}
//                     />
//                 </div>
//                 <div className="content">
//                     {/* Mostrar el título solo cuando la tarjeta está cerrada */}
//                     <h2>The sea</h2>
//                     <p>The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep.</p>
//                     {/* Elemento de audio dentro de la tarjeta */}
//                     <audio ref={audioRef} controls>
//                         <source src="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696063599/playa_2_hgfkin.mp3" type="audio/mpeg" />
//                         Tu navegador no admite el elemento de audio.
//                     </audio>
//                 </div>
//             </div>


//             <div className="card" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
//                 <div className="imgBx">
//                     <video
//                         ref={videoRef}
//                         src="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696151426/nature_-_105936_1080p_jc1doo.mp4"
//                         alt=""
//                         onEnded={handleVideoEnd}
//                     />
//                 </div>
//                 <div className="content">
//                     {/* Mostrar el título solo cuando la tarjeta está cerrada */}
//                     <h2>Lake</h2>
//                     <p>The soothing sound of the sea can have several positive effects on the mind and body of people, for example: Stress reduction, improvement of mood, facilitates sleep.</p>
//                     {/* Elemento de audio dentro de la tarjeta */}
//                     <audio ref={audioRef} controls>
//                         <source src="https://res.cloudinary.com/dp7lr71t8/video/upload/v1696063599/playa_2_hgfkin.mp3" type="audio/mpeg" />
//                         Tu navegador no admite el elemento de audio.
//                     </audio>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Subscribe;
