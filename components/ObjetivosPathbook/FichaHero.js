import React from 'react';

const FichaHero = () => {
    return (
        <div className="m-4 mb-10 p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold">Objetivos</h1>
            <div className="flex justify-around items-center my-4">
                <div className="flex-1">
                    <p className="text-lg">Pathbooks quiere ayudarte a:</p>
                    <div className="flex justify-center flex-wrap mt-4">
                        <div className="flex flex-col items-center m-3">
                            <img
                                src="/assets/objetivos1.png"
                                alt="Interactive stories"
                                height={170}
                                width={170}
                            />
                            <p className="mt-2">El amor por la lectura</p>
                        </div>
                        <div className="flex flex-col items-center m-3">
                            <img
                                src="/assets/objetivos2.png"
                                alt="Interactive stories"
                                height={170}
                                width={170}
                            />
                            <p className="mt-2">La experiencia lectora</p>
                        </div>
                        <div className="flex flex-col items-center m-3">
                            <img
                                src="/assets/objetivos3.png"
                                alt="Interactive stories"
                                height={170}
                                width={170}
                            />
                            <p className="mt-2">El pensamiento crítico</p>
                        </div>
                        <div className="flex flex-col items-center m-3">
                            <img
                                src="/assets/objetivos4.png"
                                alt="Interactive stories"
                                height={170}
                                width={170}
                            />
                            <p className="mt-2">La comprensión lectora</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FichaHero;