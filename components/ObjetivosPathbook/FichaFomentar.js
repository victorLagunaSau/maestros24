import React from 'react';

const FichaFomentar = () => {
    return (
        <div className="p-4">
            <div className="text-center">
                <h2 className="text-xl font-bold">Nuestro contenido es nuestro universo.</h2>
                <img
                    src="/assets/objetivos1.png"
                    alt="Interactive stories"
                    height={170}
                    width={170}
                    className="mx-auto"
                />
                <h2 className="text-xl font-bold">El amor por la lectura</h2>
                <p>Este PLAN LECTOR hará que tus alumnos disfruten de
                    la lectura gracias a la interactividad de nuestras historias.</p>
            </div>
            <h2 className="text-xl font-bold text-center mt-4">¿Qué contenido encontrarás?</h2>
            <div className="flex flex-wrap justify-center mt-5">
                <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-base-100 shadow-md m-1">
                    <figure>
                        <img
                            src="/assets/objetivosContenido1.png"
                            alt="Interactive stories"
                            className="p-2"
                            width={200}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">Interactivos infantiles</h3>
                        <p>Historias interactivas repletas de valores, emociones y diversión.</p>
                    </div>
                </div>
                <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-base-100 shadow-md m-1">
                    <figure>
                        <img
                            src="/assets/objetivosContenido2.png"
                            alt="Interactive stories"
                            className="p-2"
                            width={200}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">Aprendizaje lector</h3>
                        <p>Las historias de siempre con un giro moderno.</p>
                    </div>
                </div>
                <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-base-100 shadow-md m-1">
                    <figure>
                        <img
                            src="/assets/objetivosContenido3.png"
                            alt="Interactive stories"
                            className="p-2"
                            width={200}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">Classroom interactivo</h3>
                        <p>Temas académicos contados de una forma divertida.</p>
                    </div>
                </div>
                <div className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-base-100 shadow-md m-1">
                    <figure>
                        <img
                            src="/assets/objetivosContenido4.png"
                            alt="Interactive stories"
                            className="p-2"
                            width={200}
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">Biografías interactivas</h3>
                        <p>Personajes memorables de la historia, la sociedad y la cultura.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FichaFomentar;
