import React, {useMemo} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link"; // Importa Link desde Next.js

const HomePrimariaA = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const grados = [
        {
            id: "primaria4",
            grado: "Primaria 4",
            edad: "9 a 10 años",
            imagen: "/assets/home001Primaria4.png",
            url: "/primaria4"
        },
        {
            id: "primaria5",
            grado: "Primaria 5",
            edad: "10 a 11 años",
            imagen: "/assets/home001Primaria5.png",
            url: "/primaria5"
        },
        {
            id: "primaria6",
            grado: "Primaria 6",
            edad: "11 a 12 años",
            imagen: "/assets/home001Primaria6.png",
            url: "/primaria6"
        },
    ];
    return (
        <div className="max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto" id="kinder">
            <ScrollAnimationWrapper>
                <motion.div className="h-full w-full" variants={scrollAnimation}>
                    <p className=" mt-3 mb-2 text-3xl lg:text-3xl font-medium leading-relaxed text-black-500">Primaria
                        Alta:</p>
                    <p className=" mt-2 mb-2 text-2xl lg:text-2xl  leading-relaxed text-black-500">Materiales
                        recomendados para Primaria de 4 al 6:</p>
                </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
                <motion.div className="h-full w-full" variants={scrollAnimation}>
                    <div className="grid grid-flow-row sm:grid-cols-3 grid-cols-1 row-start-2 gap-3">
                        {grados.map((grado, index) => (
                            <Link key={index} href={grado.url}>
                                <motion.div
                                    whileHover={{scale: 1.05}} // Escala aumenta al poner el cursor sobre el botón
                                    whileTap={{scale: 0.95}} // Escala disminuye al presionar el botón
                                >
                                    <div className="card card-compact w-45 bg-base-80 shadow-xl" key={index}>
                                        <figure><img src={grado.imagen} alt="Kinder"/></figure>
                                        <div className="card-body">
                                            <div className="custom-list my-2">
                                                <p>Edad recomendada:</p>
                                                <h2 className="card-title">{grado.edad}</h2>
                                            </div>
                                                <div className="card-actions justify-end">
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>
            <br/>
        </div>
    );
};

export default HomePrimariaA;
