import Image from "next/image";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import FichaObjetivos from "./FichaObjetivos";

const features = [
    "FOMENTAR, el amor por la lectura.",
    "GAMIFICAR, la experiencia lectora",
    "DESARROLLAR, el pensamiento crítico",
    "MEJORAR, la comprensión lectora"
]
const Objetivos = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div className="bg-gradient-to-b from-gray-200 to-white-500 w-full " id="objetivos">
            <dialog id="objetivos_modal" className="modal">
                <FichaObjetivos/>
            </dialog>
            <div className="flex flex-col w-full p-6">
                <ScrollAnimationWrapper className="mt-8 mb-6 px-6 sm:px-8 lg:px-16">
                    <motion.h3
                        variants={scrollAnimation}
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-500  mx-auto text-center"
                    >
                        Nuestro objetivo es ayudarte
                    </motion.h3>
                </ScrollAnimationWrapper>
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  mr-4">
                        <ScrollAnimationWrapper>
                            <motion.div variants={scrollAnimation} align="left"
                                        style={{maxWidth: "300px", float: "right"}}>
                                <Image
                                    src="/assets/objetivos01.png"
                                    height={800}
                                    width={900}
                                />
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper>
                            <motion.div className="flex flex-col items-end justify-center ml-auto w-full "
                                        variants={scrollAnimation} style={{maxWidth: "400px"}}>
                                <h3 className="text-3xl lg:text-4xl text-black-500">
                                    Estamos enfocados en facilitar tu trabajo.
                                </h3>
                                <p className="text-black-500 ">
                                    <br/>
                                    Con nuestra tecnología, metodología y planeaciones cubriremos juntos las necesidades
                                    de:
                                    <br/>
                                </p>
                                <ul className="text-black-500 self-start list-inside ml-8">
                                    {features.map((feature, index) => (
                                            <motion.li
                                                className="relative circle-check custom-list"
                                                custom={{duration: 2 + index}}
                                                variants={scrollAnimation}
                                                key={feature}
                                                whileHover={{
                                                    scale: 1.1,
                                                    transition: {
                                                        duration: .2
                                                    }
                                                }}>
                                                {feature}
                                            </motion.li>
                                        )
                                    )}
                                </ul>
                                <p className="text-black-500 ">
                                    <br/>
                                    Te gustaría saber ¿Cómo lo haremos? Da clic en siguiente botón:

                                </p>
                                <button
                                    className="btn-xs flex items-center justify-center rounded-full bg-white border-azulpathbooks border hover:bg-azulpathbooks cursor-pointer"
                                    onClick={() => document.getElementById("objetivos_modal").showModal()}
                                >
                                    Saber más
                                </button>
                            </motion.div>
                        </ScrollAnimationWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Objetivos;
