import React, {useState} from "react";
import {motion} from "framer-motion";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import fileConfig from "./MosaicoData";

const MEI = () => {
    const [circleColor, setCircleColor] = useState("#3182CE");
    const [buttonTitle, setButtonTitle] = useState("MEI"); // Color inicial del círculo
    const [buttonContent, setButtonContent] = useState([
        "Mosaico",
        "Educativo",
        "integral",
    ]); // Contenido del botón actual

    // Función para calcular las posiciones de los botones alrededor del círculo
    const calculatePosition = (index, totalItems) => {
        const angle = (Math.PI * 2) / totalItems;
        const radius = 52; // Radio del círculo
        const centerX = 40; // Coordenada X del centro del círculo
        const centerY = 40; // Coordenada Y del centro del círculo
        // Calcular la posición X e Y del botón
        const x = Math.cos(angle * index) * radius + centerX;
        const y = Math.sin(angle * index) * radius + centerY;
        return {x, y};
    };

    // Cambiar el color del círculo y el contenido del botón cuando se pasa el cursor sobre un botón
    const handleButtonHover = (color, content, id) => {
        setButtonTitle(id);
        setCircleColor(color);
        setButtonContent(content);
    };

    // Generar los botones orbitando el círculo
    const orbitingButtons = Object.values(fileConfig).map(
        ({id, iconSrc, backgroundColor, content}, index) => {
            const position = calculatePosition(index, "12");
            return (
                <div
                    key={index}
                    style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        background: "none",
                        border: "none",
                        padding: 0,
                    }}
                >
                    <button
                        key={index}
                        className="absolute flex flex-col items-center justify-center"
                        style={{
                            left: `${position.x}%`,
                            top: `${position.y}%`,
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                        }}
                        onMouseEnter={() =>
                            handleButtonHover(backgroundColor, content, id)
                        } // Cambiar el color del círculo y el contenido del botón al pasar el cursor sobre él
                        onMouseLeave={() => {
                            setCircleColor("#3182CE"); // Restaurar el color inicial del círculo al quitar el cursor del botón
                            setButtonTitle("MEI")
                            setButtonContent([
                                "Mosaico",
                                "Educativo",
                                "integral",
                            ]); // Restaurar el contenido del botón al quitar el cursor del botón
                        }}
                        onClick={() => {
                            // Agrega aquí la lógica para manejar el clic en cada botón si es necesario
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: backgroundColor,
                                borderRadius: "30%",
                                width: "70px",
                                height: "70px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={iconSrc.blanco}
                                alt={id}
                                style={{width: "85%", height: "auto"}}
                            />
                        </div>
                    </button>
                </div>
            );
        }
    );

    return (
        <div>
            <div
                className="bg-gradient-to-b from-gray-200 to-white-500 w-full h-screen flex justify-center items-center"
                id="mei">
                <div className="flex flex-col w-full p-4" style={{maxWidth: "1024px"}}>
                    <ScrollAnimationWrapper className="mb-6">
                        <motion.h3 className="text-4xl font-medium text-center text-black-500">
                            MEI Mosaico Educativo Integral
                        </motion.h3>
                    </ScrollAnimationWrapper>
                    <p className="text-center text-black-500 mb-8">
                        Estamos convencidos de que la lectura formará a los adultos del mañana.
                    </p>

                    <div className="flex justify-center items-center w-full h-full mt-10 mb-16">
                        <div
                            className="relative flex justify-center items-center bg-blue-500 rounded-full h-80 w-80 m-4"
                            style={{backgroundColor: circleColor}}>
                            {orbitingButtons}

                            <div className="text-white-500" style={{maxWidth: "250px"}}>
                                <h4 className="text-lg font-bold">{buttonTitle}</h4>
                                <ul>
                                    {buttonContent.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-40% mt-10">
                        <p className="text-black-500 text-center">
                            Nuestro contenido está clasificado dentro del Mosaico Educativo Integral Pathbooks (MEI).
                            Esto quiere decir que cada libro y actividad que recomendamos van de la mano con nuestro
                            mosaico. Este cuenta con 12 ejes articuladores.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MEI;
