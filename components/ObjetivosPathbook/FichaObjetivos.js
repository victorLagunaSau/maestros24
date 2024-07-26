import React, { useRef } from "react";
import {ReactToPrint} from "react-to-print";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPrint, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import FichaHero from "./FichaHero";
import FichaFomentar from "./FichaFomentar";
import FichaGamificar from "./FichaGamificar";
import FichaDesarrollar from "./FichaDesarollar";
import FichaMejorar from "./FichaMejorar";

const ComponentToPrint = React.forwardRef(() => {
    return (
        <div className="m-4 mb-10" id="objetivosImprime"
             style={{maxWidth: "98%", marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="m-4" style={{width: '70px', height: '8px'}}/>
            <img src="/assets/logoplaneacion.png" alt="Logo"/>
            <div>
                <FichaHero className="m-4 mb-10 p-4 max-w-4xl mx-auto"/>
                <FichaFomentar className="m-4 mb-10 p-4 max-w-4xl mx-auto"/>
                <FichaGamificar className="m-4 mb-10 p-4 max-w-4xl mx-auto"/>
                <FichaDesarrollar className="m-4 mb-10 p-4 max-w-4xl mx-auto"/>
                <FichaMejorar className="m-4 mb-10 p-4 max-w-4xl mx-auto"/>
            </div>
        </div>
    );
});

const FichaObjetivos = () => {
        const componentRef = useRef(null);
    const imprimir = () => {
        window.print();
    };
    return (
        <div className="max-w-7xl bg-white-100">
            <div style={{position: 'relative'}} className="max-w-7xl">
                <div className="navbar bg-neutral text-neutral-content">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h8m-8 6h16"/>
                                </svg>
                                Menú
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52">
                                <li>
                                    <ReactToPrint
                                        trigger={() => (
                                            <a onClick={imprimir}>

                                                Imprimir
                                            </a>
                                        )}
                                        content={() => componentRef.current}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal">
                            <li className="m-2">
                                <ReactToPrint
                                    trigger={() => (
                                        <a onClick={imprimir}>
                                            Imprimir
                                        </a>
                                    )}
                                    content={() => componentRef.current}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1">
                            <form method="dialog">
                                <li>
                                    <button className="mr-4">
                                        <a><FontAwesomeIcon icon={faCircleXmark} className="mr-2"/>Cerrar</a>
                                    </button>
                                </li>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white-100 m-2 mb-6" style={{overflowY: 'auto', maxHeight: 'calc(100vh - 3rem)'}}>
                <ComponentToPrint ref={componentRef} />
            </div>
        </div>
    );
};

export default FichaObjetivos;