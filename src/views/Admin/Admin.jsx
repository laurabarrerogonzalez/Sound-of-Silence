import React from "react";
import '../Admin/Admin.css';
import Card from "../../Componets/Header/CardFiles";
import Header from "../../Componets/Header/Header.jsx"
import Footer from "../../Componets/Footer/Footer.jsx"

const Admin = () => {

    return (

        <>
        <Header/>
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
        <Footer/>
        </>
    );
};

export default Admin;

