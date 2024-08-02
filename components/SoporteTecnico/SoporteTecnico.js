import Image from "next/image";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./../Layout/ScrollAnimationWrapper";
import CopyButton from "../../components/misc/CopyButton";
import LinkButton from "../../components/misc/LinkButton";

const features = [
    "Maestros.",
    "Padres de familia.",
    "Tu equipo de ventas",
];

const HomeSoporteTecnico = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const dataSoporteTecnico = (
        "Soporte Técnico Pathbooks: \n" +
        "Teléfono y Whatsapp + 52 81 2408 6577 \n" +
        "Email: soporte@pathbooks.app\n"
    );

    return (
        <div className="bg-gradient-to-b from-gray-200 to-white-500 w-full" id="soportetecnico">
            <div className="flex flex-col w-full my-0 mt-10 py-4">
                <div className="max-w-screen-xl mt-8  sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-3xl font-medium text-black-500 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center"
                        >
                            Soporte técnico
                        </motion.h3>
                    </ScrollAnimationWrapper>
                    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-2 my-12">
                        <ScrollAnimationWrapper>
                            <motion.div variants={scrollAnimation} align="left"
                                        style={{maxWidth: "200px", float: "right"}}>
                                <Image
                                    src="/assets/Illustration2.png"
                                    height={380}
                                    width={508}
                                />
                            </motion.div>
                        </ScrollAnimationWrapper>
                        <ScrollAnimationWrapper>
                            <motion.div className="flex flex-col ml-auto " variants={scrollAnimation}>
                                <h1 className="text-xl font-medium align-middle text-black-500">
                                    Listos para ayudarte.
                                </h1>
                                <p className="text-black-500">
                                    Contáctanos por cualquier problema de funcionamiento de la aplicación o página web
                                    de Pathbooks.
                                    <br/>
                                    Además puedes compartir con:
                                </p>

                            </motion.div>
                            <motion.p className="flex flex-col ml-auto " variants={scrollAnimation}>
                                <div className="text-xl">
                                    <br/>
                                    Email:
                                    <br/>
                                    <strong className="text-4xl lg:text-4xl">
                                        <LinkButton buttonName="soporte@pathbooks.app"
                                                    hrefUrl="mailto:soporte@pathbooks.app" linkTipo="email" size={15}/>
                                    </strong>
                                    <br/>
                                    WhatsApp:
                                    <br/>
                                    <strong className="text-4xl lg:text-4xl">
                                        <LinkButton buttonName="+52 81 2408 6577" hrefUrl="https://wa.me/528124086577"
                                                    linkTipo="whatsapp" size={23}/>
                                    </strong>
                                    <br/>
                                </div>
                            </motion.p>
                        </ScrollAnimationWrapper>
                    </div>
                </div>
            </div>
            <iframe
                id="contactar-soporte-b77kfi"
                scrolling={"no"}
                src="https://opnform.com/forms/contactar-soporte-b77kfi"
                style={{
                    border: "none",
                    width: "100%",
                    overflowY: "hidden",
                    height: "660px",
                }}
            ></iframe>
            <script async onLoad="initEmbed('contactar-soporte-b77kfi')" src="https://opnform.com/widgets/iframe.min.js"
                    type="text/javascript"></script>
        </div>
    );
};

export default HomeSoporteTecnico;
