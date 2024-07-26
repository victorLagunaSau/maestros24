import React from 'react';

const FichaDesarrollar = () => {
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <div className="text-center">
                <h2 className="text-xl font-bold">La lectura es el cohete del conocimiento.</h2>
                <img
                    src="/assets/objetivos3.png"
                    alt="Interactive stories"
                    height={170}
                    width={170}
                    className="mx-auto"
                />
                <h2 className="text-xl font-bold">El pensamiento crítico</h2>
                <p>El departamento editorial tiene muy en claro la
responsabilidad de la lectura, por tanto, cada tema de
nuestros libros abre la conversación y la reflexión.</p>
            </div>
            <h2 className="text-xl font-bold text-center mt-4">¿Cómo lo hacemos?</h2>


            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-4 mr-4">


            </div>
             <div className="flex flex-col justify-center text-center m-3">
                    <h3 className="text-3xl lg:text-4xl text-black-500">
                        Cada pathbook cuenta con:
                    </h3>
                    <p className="text-black-500">
                        <br/>
                        una actividad para realizar en el salón de clases.
                        <br/>
                    </p>
                    <p>
                        Con esta incentivamos el intercambio oral, haciendo que tus alumnos lleven la lectura un paso más allá.
                    </p>
                </div>
            <div className="flex items-center justify-center">
                    <img
                        src="/assets/objetivosDesarollar1.png"
                        alt="Imagen de objetivos"
                        className="max-w-full h-auto"
                        width={500}
                    />
                </div>
        </div>
    );
};

export default FichaDesarrollar;
