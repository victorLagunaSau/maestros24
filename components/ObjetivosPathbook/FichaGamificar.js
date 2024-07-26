import React from 'react';

const FichaGamificar = () => {
    return (
        <div className="p-4">
            <div className="text-center">
                <h2 className="text-xl font-bold">La lectura es una aventura muy divertida.</h2>
                <img
                    src="/assets/objetivos2.png"
                    alt="Interactive stories"
                    height={170}
                    width={170}
                    className="mx-auto"
                />
                <h2 className="text-xl font-bold">La experiencia lectora</h2>
                <p>Este plan lector está diseñado para que exista un
                    progreso junto con su grado escolar.</p>
            </div>
            <h2 className="text-xl font-bold text-center mt-4">¿Cómo lo hacemos?</h2>


            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-4 mr-4">
                <div className="flex items-center justify-center">
                    <img
                        src="/assets/objetivosGamificar1.png"
                        alt="Imagen de objetivos"
                        className="max-w-full h-auto"
                        width={400}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-3xl lg:text-4xl text-black-500">
                        La dosificación de Pathbooks hace que:
                    </h3>
                    <p className="text-black-500">
                        <br/>
                        Los alumnos tenga 20 libros exclusivos para su plan lector.
                        <br/>
                    </p>
                    <p>
                        Pero, además, tus alumnos podrán
                        disfrutar de nuestro contenido apto para su edad. Al terminar su plan
                        lector de primer año y subir de grado escolar, liberarán el contenido
                        exclusivo de 2.° año y así sucesivamente.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FichaGamificar;
