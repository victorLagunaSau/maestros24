import Image from "next/image";
import React, {useMemo, useState} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import {Link as LinkScroll} from "react-scroll";

const ModuloPlanLector = ({grado, imagen, botonesPlanLector}) => {
    const [activeLink, setActiveLink] = useState(null);
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-gradient-to-b from-gray-200 to-white-100" id="planlector">
            <div className="flex flex-col w-full">
                <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-100 leading-relaxed w-4/8 sm:w-4/8 lg:w-4/8 mx-auto text-center"
                        >
                            Plan Lector para: {grado}
                        </motion.h3>
                    </ScrollAnimationWrapper>

                    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 y-8 my-12">
                        <ScrollAnimationWrapper>
                            <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
                                        variants={scrollAnimation}>
                                <h3 className="text-3xl lg:text-4xl text-black-500">
                                    Estamos felices de presentarte el plan para {grado}.
                                </h3>
                                <div className="my-2 text-black-500">
                                    Aquí encontrarás todas las herramientas que hemos desarrollado para ti y tus
                                    alumnos.
                                    Estamos convencidos de que la lectura cambia vidas y de que podemos mejorar
                                    nuestra comunidad gracias a los mensajes, aprendizajes y emociones que nos brindan
                                    los libros.
                                    <div>
                                        <strong>Conoce más sobre el plan lector con nuestro video explicativo.</strong>
                                        {/*<div>*/}
                                        {/*    <a*/}
                                        {/*        href={hrefVideo}*/}
                                        {/*        target="_blank"*/}
                                        {/*        rel="noopener noreferrer"*/}
                                        {/*        className="btn btn-outline py-2 px-5 sm:px-8 border-red-400 text-red-400 bg-white-500 hover:bg-red-600 hover:text-red-400 transition-all hover:shadow-red-600"*/}
                                        {/*    >*/}
                                        {/*        <img src={"/assets/Icon/youtube.png"} alt="Icono" className="mr-2"/>*/}
                                        {/*        {textVideo}*/}
                                        {/*    </a>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper>
                            <motion.div style={{maxWidth: "300px"}} variants={scrollAnimation}>
                                <Image
                                    src={imagen}
                                    alt="VPN Illustrasi"
                                    layout="responsive"
                                    quality={100}
                                    height={200}
                                    width={200}
                                />
                            </motion.div>
                        </ScrollAnimationWrapper>

                    </div>
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-100 leading-relaxed w-4/8 sm:w-4/8 lg:w-4/8 mx-auto text-center"
                        >
                            <div className="grid grid-flow-row sm:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-6 p-3">
                                {botonesPlanLector.map((botonesPlanLector) => (
                                    <LinkScroll
                                        key={botonesPlanLector.id}
                                        activeClass="active"
                                        to={botonesPlanLector.id}
                                        spy={true}
                                        smooth={true}
                                        duration={1000}
                                        onSetActive={() => setActiveLink(botonesPlanLector.id)}
                                        className="btn btn-outline py-2 px-5 sm:px-8 border-blue-400 text-blue-400 bg-white-500 hover:bg-blue-700 hover:text-blue-400 transition-all hover:shadow-blue-700"
                                        style={{minWidth: "200px"}}
                                    >
                                        {botonesPlanLector.text}
                                    </LinkScroll>
                                ))}
                            </div>
                        </motion.h3>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default ModuloPlanLector;