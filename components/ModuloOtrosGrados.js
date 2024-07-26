import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";
import getScrollAnimation from "../utils/getScrollAnimation"; // Agrega esta línea

const ModuloOtrosGrados = ({ botonesOtrosGrados }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div className="justify-center items-center" id="grados">
            <ScrollAnimationWrapper>
                <motion.div className="p-2" variants={scrollAnimation}>
                    <div className="justify-center items-center">
                        <div className="flex flex-col sm:flex-row justify-between">
                            <div className=" card-container p-3 justify-center items-center">
                                <Link href={botonesOtrosGrados[0].url} >
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="btn-xs flex items-center justify-center rounded-full bg-white border-azulpathbooks border hover:bg-azulpathbooks cursor-pointer"
                                    >
                                        <p className="p-4 hover:text-white-500 transition-all text-azulpathbooks">{botonesOtrosGrados[0].text}</p>
                                    </motion.button>
                                </Link>
                            </div>
                            <div className=" card-container p-3 justify-center items-center">
                                <Link href={botonesOtrosGrados[1].url}>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="btn-xs flex items-center justify-center rounded-full bg-white border-azulpathbooks border hover:bg-azulpathbooks cursor-pointer"
                                    >
                                        <p className="p-4 hover:text-white-500 transition-all text-azulpathbooks">{botonesOtrosGrados[1].text}</p>
                                    </motion.button>
                                </Link>
                            </div>
                            <div className=" card-container p-3 justify-center items-center">
                                <Link href={botonesOtrosGrados[2].url}>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="btn-xs flex items-center justify-center rounded-full bg-white border-azulpathbooks border hover:bg-azulpathbooks cursor-pointer"
                                    >
                                        <p className="p-4 hover:text-white-500 transition-all text-azulpathbooks">{botonesOtrosGrados[2].text}</p>
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <strong className="flex justify-center items-center text-3xl font-medium text-yellow-500">¿Cómo
                        utilizar Pathbooks en clase?</strong>
                    <h3 className="flex justify-center items-center text-1xl font-medium text-black-100 sm:gap-8 gap-6 p-4">
                        Aquí encontrarás todas las herramientas necesarias para poder tener un plan lector de mucho
                        éxito con tus estudiantes
                    </h3>
                </motion.div>
            </ScrollAnimationWrapper>
        </div>
    );
};

export default ModuloOtrosGrados;
