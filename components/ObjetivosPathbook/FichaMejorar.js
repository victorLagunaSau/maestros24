import React from 'react';

const FichaMejorar = () => {
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <div className="text-center">
                <h2 className="text-xl font-bold">La estrella de nuestro plan lector.</h2>
                <img
                    src="/assets/objetivos4.png"
                    alt="Interactive stories"
                    height={170}
                    width={170}
                    className="mx-auto"
                />
                <h2 className="text-xl font-bold">La comprensión lectora</h2>
                <p>La comprensión lectora es nuestra razón de ser. Nuestro
                    mayor interés es que tus alumnos tengan una mejora
                    continua en sus competencias literarias.</p>
            </div>
            <h2 className="text-xl font-bold text-center mt-4">¿Cómo lo hacemos?</h2>
            <p>
                Utilizamos mecanismos de evaluación que nos ayudan a evaluar la
                comprensión lectora de tus alumnos. En el gráfico de abajo te
                mostramos cuáles son nuestros mecanismos y qué tipo de comprensión
                lectora aborda. (Profundizaremos en este tema más adelante).
            </p>
            <div>
                <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-4 mr-4">
                    <div className="flex flex-col justify-center text-center m-3">
                        <h3 className="text-3xl lg:text-4xl text-black-500">
                            Cuestionarios de incisos:
                        </h3>
                        <p className="text-black-500">
                            <br/>
                            (Literal, Inferencial y Crítica)
                            <br/>
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/assets/objetivosMejorar1.png"
                            alt="Imagen de objetivos"
                            className="max-w-full h-auto"
                            width={120}
                        />
                    </div>
                </div>
                <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-4 mr-4">
                    <div className="flex items-center justify-center">
                        <img
                            src="/assets/objetivosMejorar2.png"
                            alt="Imagen de objetivos"
                            className="max-w-full h-auto"
                            width={120}
                        />
                    </div>
                    <div className="flex flex-col justify-center text-center m-3">
                        <h3 className="text-3xl lg:text-4xl text-black-500">
                            Actividades del salón de clases - Intercambio oral:
                        </h3>
                        <p className="text-black-500">
                            <br/>
                            (Apreciativa y Creativa)
                            <br/>
                        </p>
                    </div>
                </div>
                <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-4 mr-4">
                    <div className="flex flex-col justify-center text-center m-3">
                        <h3 className="text-3xl lg:text-4xl text-black-500">
                            Tareas - Lectoescritura:
                        </h3>
                        <p className="text-black-500">
                            <br/>
                            (Apre﻿ciativa y creativa)
                            <br/>
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/assets/objetivosMejorar3.png"
                            alt="Imagen de objetivos"
                            className="max-w-full h-auto"
                            width={120}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FichaMejorar;
