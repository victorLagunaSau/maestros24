import React, {useState} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

const videoTutorialesData = [

    {
        title: "Como usar pathbooks",
        subtitle: "Capacitacion: Primera parte",
        description: "En este video se cubren los aspectos iniciales de la capacitación, y se dan recomendaciones de lectura para todos los gradosEs.",
        src: "https://www.youtube.com/embed/F7rR-4Khwks",
        thumbnail: "https://img.youtube.com/vi/F7rR-4Khwks/0.jpg",
    },
    {
        title: "Asignar lecturas",
        subtitle: "Capacitacion: Segunda parte",
        description: "Este video continúa con el tema de asignacion de lecturas, como revisar que los estudiantes si llen en la plataforma, ademas de ayudar a intrpretar el trabajo de nuestros estudiantes.",
        src: "https://www.youtube.com/embed/jOZSzpqiyy0",
        thumbnail: "https://img.youtube.com/vi/jOZSzpqiyy0/0.jpg",
    },
    {
        title: "Portal de Maestros PATHBOOKS",
        subtitle: "Capacitacion: Tercera parte",
        description: "Este video continúa con el tema de asignacion de lecturas, como revisar que los estudiantes si llen en la plataforma, ademas de ayudar a intrpretar el trabajo de nuestros estudiantes.",
        src: "https://www.youtube.com/embed/FIrISXoJsjw",
        thumbnail: "https://img.youtube.com/vi/FIrISXoJsjw/0.jpg",
    },
        {
        title: "Pathbooks Plataforma de lectura interactiva",
        subtitle: "Introducción a la plataforma",
        description: "Este video es una introducción a la plataforma de lectura interactiva Pathbooks.",
        src: "https://www.youtube.com/embed/SVDATXnwXEw?si=7q-0RouRk74IsjAn",
        thumbnail: "https://img.youtube.com/vi/SVDATXnwXEw/0.jpg",
    },
    {
        title: "Shark Tank Mexico - Pathbooks",
        subtitle: "¡Leer libros núnca fue tan divertido!",
        description: "Con Pathbooks Kassandra Rodriguez y Jorge Caballero pretenden fomentar el amor por la lectura con una plataforma interactiva donde los usuarios tienen la posibilidad de cambiar el rumbo de la historia ¿Será un final feliz para estos ratones de biblioteca?",
        src: "https://www.youtube.com/embed/dLAXk4skWVk",
        thumbnail: "https://img.youtube.com/vi/dLAXk4skWVk/0.jpg",
    },
];

const VideoTutoriales = () => {
    const [mainVideo, setMainVideo] = useState(videoTutorialesData[0]);
    const [isLoading, setIsLoading] = useState(false);

    const handleVideoChange = (video) => {
        setIsLoading(true);
        setTimeout(() => {
            setMainVideo(video);
            setIsLoading(false);
        }, 500); // Simulate loading time
    };

    return (
        <div className="bg-gradient-to-b from-gray-200 to-white w-full" id="videotutoriales">
            <div className="hidden lg:flex flex-col w-full my-0 mt-10 py-4">
                <ScrollAnimationWrapper>
                    <motion.h2
                        variants={getScrollAnimation()}
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center"
                    >
                        Videotutoriales para maestros
                    </motion.h2>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper className="flex justify-center w-full my-0 mt-10 py-4 lg:px-20">
                    <motion.div className="flex w-full flex-col lg:flex-row" variants={getScrollAnimation()}>
                        <div className="flex-grow mr-4 flex flex-col items-center " style={{width: "800px"}}>
                            {isLoading ? (
                                <div className="flex items-center justify-center w-full h-56">
                                    <span className="loading loading-spinner loading-md"></span>
                                </div>
                            ) : (
                                <div>
                                    <div style={{width: "800px", height: "450px"}}>
                                        <iframe
                                            src={mainVideo.src}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            style={{width: "100%", height: "100%"}}
                                        ></iframe>
                                    </div>
                                    <div
                                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed text-center mt-4">
                                        {mainVideo.title}
                                    </div>
                                    <div className="text-lg text-gray-700 leading-relaxed text-center mt-2">
                                        {mainVideo.subtitle}
                                    </div>
                                    <div className="text-md text-gray-500 leading-relaxed text-center mt-2">
                                        {mainVideo.description}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="carousel carousel-vertical rounded-box max-h-[500px] overflow-y-auto">
                            {videoTutorialesData.map((video, index) => (
                                <div
                                    key={index}
                                    className="carousel-item cursor-pointer p-2 border bg-white-500 rounded-lg hover:bg-gray-100 transition flex items-center m-2"
                                    onClick={() => handleVideoChange(video)}
                                    style={{maxWidth: "500px"}}
                                >
                                    <img src={video.thumbnail} alt={video.title} className="w-1/8 h-auto rounded"
                                         style={{maxHeight: "80px"}}/>
                                    <div className="ml-4 w-2/3">
                                        <div className="text-xl font-medium text-black-500 ">{video.title}</div>
                                        <div className="text text-gray-600">{video.subtitle}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
            <div className="flex flex-col lg:hidden space-y-4 mt-10 px-4">
                {videoTutorialesData.map((video, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div style={{width: "100%", height: "200px"}}>
                            <iframe
                                src={video.src}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{width: "100%", height: "100%"}}
                            ></iframe>
                        </div>
                        <div
                            className="text-xl sm:text-2xl lg:text-3xl font-medium text-black leading-relaxed text-center mt-4">
                            {video.title}
                        </div>
                        <div className="text-lg text-gray-700 leading-relaxed text-center mt-2">
                            {video.subtitle}
                        </div>
                        <div className="text-md text-gray-500 leading-relaxed text-center mt-2">
                            {video.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoTutoriales;