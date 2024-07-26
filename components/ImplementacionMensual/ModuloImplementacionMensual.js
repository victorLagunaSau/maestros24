import React, {useMemo, useState, useEffect} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import ModuloCardPathbook from "./ModuloCardPathbook";

const ModuloImplementacionMensual = ({meses, lecturaProperties}) => {
    const [selectedMes, setSelectedMes] = useState(null);
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    const handleMesClick = (mesId) => {
        setSelectedMes(mesId);
    };
    useEffect(() => {
        const mesInicial = meses.find((mes) => mes.checked);
        if (mesInicial) {
            setSelectedMes(mesInicial.id);
        } else {
            setSelectedMes(meses[0].id);
        }
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-200 to-white-500 w-full" id="implementacion">
            <div className="flex flex-col w-full  p-6">
                <style>
                    {`
				  .card-container {
					display: flex;
					flex-wrap: wrap;
				  }
				  .card-item {
					width: 100%;
					@media (min-width: 640px) {
					  width: 50%;
					}
					@media (min-width: 1024px) {
					  width: 33.333%;
					}
				  }
				`}
                </style>

                <ScrollAnimationWrapper className="mt-8 mb-6 px-6 sm:px-8 lg:px-16">
                    <motion.h3
                        variants={scrollAnimation}
                        className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-500 mx-auto text-center"
                    >
                        Plan de implementación
                    </motion.h3>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper className="mt-2 mb-2 px-2 sm:px-2 lg:px-2 text-black-500 mx-auto text-center">
                    <motion.h3
                        variants={scrollAnimation}
                    >
                        Este es el plan de trabajo que te recomendamos seguir para asegurar el éxito
                        con Pathbooks.
                        <br/>
                        Si es la primera vez que utilizas pathbooks te recomiendo tomar las capacitaciones iniciales
                        <button className="btn btn-link">agenda aquí</button>
                    </motion.h3>
                </ScrollAnimationWrapper>
                <div className="text-black-500 mx-auto p-1 sm:p-3 lg:p-6 ">

                    <div style={{margin: '20px auto', textAlign: 'center'}}>
                        <div>
                        <span>
                          Seleccioná un <strong className="text-azulpathbooks">mes</strong>
                        </span>
                        </div>

                        <div className="join">
                            {meses.map((mes) => (
                                <button
                                    key={mes.id}
                                    className={`join-item btn btn-sm  ${selectedMes === mes.id ? 'btn-active' : ''}`}
                                    onClick={() => handleMesClick(mes.id)}
                                >
                                    <strong className="text-azulpathbooks">{mes.textBtn}</strong>
                                </button>
                            ))}
                        </div>
                    </div>
                    {meses.map((mes, index) => (
                        <React.Fragment key={index + 1}>
                            <div
                                className="collapse collapse-arrow bg-white-500 border-2 border-blue-500 mt-1 mb-2 px-2">
                                <input
                                    type="radio"
                                    name="my-accordion-2"
                                    checked={selectedMes === mes.id}  // Aquí se hace la comparación
                                    onChange={() => handleMesClick(mes.id)}
                                />
                                <div className="collapse-title text-xl text-blue-500">
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <strong className="text-blue-500">{mes.textTitle} </strong>
                                        <p className="text-xs ml-2">
                                            {mes.lecturas.length === 0 ? "No contiene lecturas" : mes.lecturas.length === 1 ? "Contiene 1 lectura" : `Contiene ${mes.lecturas.length} lecturas`}
                                        </p>
                                    </div>
                                </div>
                                <div className="collapse-content">
                                    <p className="text-blue-500">
                                        Recomendación de <strong className="text-blue-600">lecturas:</strong>
                                    </p>
                                    <div className="card-container">
                                        {mes.lecturas.map((lectura, index) => (
                                            <div className="card-item" key={index}>
                                                <ModuloCardPathbook lectura={lectura}
                                                                    lecturaProperties={lecturaProperties}/>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-black-500">{mes.fraceMotivacion}
                                        <strong>{mes.autorfrace}</strong></p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>

    );
};
export default ModuloImplementacionMensual;
