import React, {useMemo} from "react";
import {Link as LinkScroll} from "react-scroll";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";

const InicioGrados = ({grado}) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <div
            className="mt-10 px-8 xl:px-16 mx-auto pt-2 pb-2"
            id="home"
            style={{
                backgroundImage: "url('/assets/bgheader.jpg')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}
        >
            <ScrollAnimationWrapper className="mt-10">
                <motion.div className="m-2 flex justify-center items-center" variants={scrollAnimation}>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/assets/imagotipo-pathbooks-blanco.png"
                            alt="Logo"
                            width={80}
                            height={50}
                            variants={scrollAnimation}
                        />
                        <h3 className="text-4xl font-medium text-yellow-500 text-center">
                            {grado}
                        </h3>
                    </div>

                </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
                <motion.div className="m-3 flex justify-center items-center" variants={scrollAnimation}>
                    <div className="text-center">
                        <h3 className="text-sm font-medium text-white-100 mb-2">
                            Conoce las lecturas recomendadas para tus estudiantes:
                        </h3>
                        <LinkScroll
                            key="implementacion"
                            to="implementacion"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            className="btn btn-outline py-2 px-5 sm:px-8 border-yellow-500 text-yellow-100 bg-yellow-700 hover:bg-yellow-500 hover:text-yellow-700 transition-all hover:shadow-yellow-500"
                            style={{minWidth: "200px"}}
                        >
                            Ver Lecturas
                        </LinkScroll>
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>
        </div>
    );
};

export default InicioGrados;
