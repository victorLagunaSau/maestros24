import React, {useRef} from "react";
import ButtonMEI from "../MosaicoEducativo/ButtonMEI";
import ButtonGrado from "../misc/ButtonGrado";
import {ReactToPrint} from "react-to-print";
import QRCode from "qrcode.react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPrint, faBook, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const ComponentToPrint = React.forwardRef(({fichaLectura, lectura, lecturaProperties}, ref) => {
    return (
        <div className="m-4 mb-10" ref={ref} id={lectura.lecturaId}
             style={{maxWidth: "90%", marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="m-4" style={{width: '70px', height: '8px'}}/>
            <img src="/assets/logoplaneacion.png" alt="Logo"/>
            <div className="m-4">
                <div className="flex flex-col sm:flex-row">
                    <div className="w-1/4" style={{display: 'flex', flexDirection: 'column'}}>
                        <figure>
                            {fichaLectura.cover && (
                                <img
                                    src={fichaLectura.cover}
                                    alt={`Portada de ${fichaLectura.title}`}
                                    style={{
                                        maxWidth: '120px',
                                        width: '90%',
                                        minWidth: '120px',
                                        marginLeft: 'auto',
                                        marginRight: 'auto'
                                    }}
                                    className="shadow-md shadow-gray-400 rounded "
                                />
                            )}
                        </figure>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            {fichaLectura.audiobook ? (
                                <div className="flex items-center">
                                    <img
                                        src="/assets/Icon/audiook.png"
                                        alt="Icono"
                                        style={{width: "25px", height: "25px"}}
                                    />
                                    <p className="text-sm m-2">
                                        Con Audio
                                    </p>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <img
                                        src="/assets/Icon/audiooff.png"
                                        alt="Icono"
                                        style={{width: "25px", height: "25px"}}
                                    />
                                    <p className="text-sm m-2"> Sin Audio </p>

                                </div>
                            )}
                        </div>
                        <div className="bg-blue-200 rounded-2xl m3 text-center"
                             style={{width: "70%", minWidth: '130px', marginLeft: 'auto', marginRight: 'auto'}}>
                            <p className="text-xs text-white-500 m-1">Abrir la lectura</p>
                            <QRCode
                                value={"https://web.pathbooks.app/pathbook/" + lectura.lecturaId}
                                className="border-4 "
                                style={{width: "90%", marginLeft: 'auto', marginRight: 'auto'}}
                            />
                            <p className="text-xs text-white-500 m-1">Escanea el QR</p>
                        </div>
                    </div>
                    <div className="w-3/4 ">
                        <div className="text-1xl font-medium text-black-500">{lectura.title}:</div>
                        {fichaLectura.activities.homework && fichaLectura.activities.homework.title && (
                            <p><strong>{fichaLectura.activities.homework.title.es}</strong></p>
                        )}
                        <div className="text-3xl font-medium">{fichaLectura.title}</div>
                        <p className="text-sm">
                            <strong>Sinopsis:</strong> {fichaLectura.summary}
                            <span className="text-xs text-azulpathbooks"> Autor:</span>
                            <strong className="text-xs text-azulpathbooks"> {fichaLectura.author}</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row">
                            <div className="lg:w-2/4 flex flex-col sm:flex-row"
                                 style={{flexDirection: 'column', minWidth: '230px'}}>
                                <p className="text-xs text-azulpathbooks">Tema:</p>
                                <strong className="text-xs">{fichaLectura.theme}</strong>
                                <p className="text-xs text-azulpathbooks">Comprensión lectora:</p>
                                <strong className="text-xs">{fichaLectura.comprehension.join(', ')}</strong>
                                <p className="text-xs text-azulpathbooks">Valores fomentados:</p>
                                <strong
                                    className="text-xs">{fichaLectura.qualities.map((quality, index) => quality.es + (index !== fichaLectura.qualities.length - 1 ? ', ' : ''))}</strong>
                                <p className="text-xs text-azulpathbooks">Comprensión lectora:</p>
                                <strong
                                    className="text-xs">{fichaLectura.genres.map(genero => genero.es).join(', ')}</strong>

                            </div>
                            <div className="lg:w-2/4 ml-4" style={{display: 'flex', flexDirection: 'column'}}>
                                <p className="text-azulpathbooks">Enfoque:</p>
                                <ButtonMEI buttonName={fichaLectura.mei} tipo="azul"
                                           className="rounded shadow-2xl align-middle"/>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', width: '95%',}}>
                            <div className="lg:p-2 lg:w-1/3 text-center m-1 ">
                                <p className="text-xs text-azulpathbooks">Nivel Lector {fichaLectura.readingLevel}:</p>
                                <strong className="text-xs">{fichaLectura.readingLevelTxt}</strong>
                            </div>

                            <div className="lg:p-2 lg:w-1/3 text-center m-1">
                                <p className="text-xs text-azulpathbooks">Grado Recomendado:</p>
                                <ButtonGrado grados={fichaLectura.grades}/>
                            </div>
                            <div className="lg:p-2 lg:w-1/3 text-center m-1">
                                <p className="text-xs text-azulpathbooks">Edad recomendada: </p>
                                <strong className="text-xs">{fichaLectura.age} años</strong>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', width: '95%'}}>
                            <div className="lg:p-2 lg:w-1/4 text-center m-1">
                                <p className="text-xs text-azulpathbooks">Tipo:</p>
                                <strong className="text-xs">{fichaLectura.type}</strong>
                            </div>
                            <div className="lg:p-2 lg:w-1/4 text-center m-1">
                                <p className="text-xs text-azulpathbooks">Idiomas:</p>
                                {fichaLectura.languages.map((item, index) => (
                                    <strong className="text-xs" key={index}>
                                        {item}
                                        {fichaLectura.languages[index] === 'EN' && fichaLectura.englishLevel &&
                                            <p> ({fichaLectura.englishLevel})</p>}
                                        {index !== fichaLectura.languages.length - 1 && ', '}
                                    </strong>
                                ))}
                            </div>
                            <div className="lg:p-2 lg:w-1/4 text-center m-1">
                                <p className="text-xs text-azulpathbooks">Tiempo:</p>
                                <strong className="text-xs">{fichaLectura.readingTime} minutos</strong>
                            </div>
                            <div className="lg:p-2 lg:w-1/4 text-center m-1">
                                <p className="text-xs text-azulpathbooks">Finales:</p>
                                <strong className="text-xs">{fichaLectura.endings}</strong>
                            </div>
                            <div className="lg:p-2 lg:w-1/4 text-center m-1">
                                <p className="text-xs text-azulpathbooks">Extensión:</p>
                                <strong
                                    className="text-xs">{fichaLectura.contentCount?.es?.words || 'N/A'} palabras</strong>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center m-6">
                <strong className="text-center text-azulpathbooks text-2xl">Metodología de aprendizaje lector:</strong>
                <p className="text-xs">En esta sección, te sugerimos utilizar las siguientes 3 mecánicas de aprendizaje
                    lector de manera personalizada para este libro.</p>
            </div>

            <div className="border-2 ">
                <img
                    src="/assets/metodologia1.png"
                    alt="Icono"
                    style={{height: "50px"}}
                    className="m-2"
                />
                <div className="m-3">
                    <p><strong className="text-azulpathbooks">{lecturaProperties.preguntasInferencialesTitulo}</strong>
                    </p>
                    {fichaLectura.questionsBeforeReading.map((pregunta, index) => (
                        <p key={index + 1} className="m-3">
                            {index + 1}. <strong>{pregunta}</strong>
                        </p>
                    ))}
                    <p className="text-xs text-gray-600 p-2 m-2">
                        Recomendación: {lecturaProperties.preguntasInferencialesRecomendacion}
                    </p>
                </div>
            </div>
            {/*DIVIDE LA HOJA AQUI*/}
            <div style={{pageBreakBefore: "always"}}></div>
            <div className="m-4" style={{width: '70px', height: '8px'}}/>
            <div className="logo-print" style={{display: 'none'}}>
                <img src="/assets/logoplaneacion.png" alt="Logo"/>
            </div>

            <div className="border-2">
                <img
                    src="/assets/metodologia2.png"
                    alt="Icono"
                    style={{height: "50px"}}
                    className="m-2"
                />
                <div className="m-2 border-3">
                    <p><strong className="text-azulpathbooks">Opciones:</strong></p>
                    {lecturaProperties.recomendacionLectura.map((recomendacionLectura, index) => (
                        <div key={index + 1} className="p-2">
                            <p><strong>{recomendacionLectura.titulo}</strong></p>
                            <p className="text-sm text-gray-600">
                                {recomendacionLectura.recomendacion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-4" style={{width: '70px', height: '8px'}}/>

            {(fichaLectura.activities.homework.title || fichaLectura.activities.activity.title) && (
            <div className="border-2">
                <img
                    src="/assets/metodologia3.png"
                    alt="Icono"
                    style={{height: "50px"}}
                    className="m-2"
                />
                <div className="m-2 border-3">
                    {fichaLectura.quiz && (
                        <div>
                            <p><strong className="text-azulpathbooks">Esta lectura cuenta con cuestionario:</strong></p>
                            <p className="text-sm text-gray-600">
                                Solicitar a los estudiantes que después de realizar la lectura <strong
                                className="text-azulpathbooks">de manera individual,</strong> realizar el
                                cuestionario que la aplicación de lectura les solicita, esto nos permitirá poder evaluar
                                su progreso.
                            </p>
                        </div>
                    )}
                    {(fichaLectura.activities.homework.title || fichaLectura.activities.activity.title) && (
                        <div>
                            <p><strong className="text-azulpathbooks">Actividad:</strong></p>
                            <p><strong>{fichaLectura.activities.activity?.title?.es}</strong></p>
                            <p className="text-sm text-gray-600">

                                {fichaLectura.activities.activity?.content?.es}
                            </p>
                        </div>
                    )}
                    {fichaLectura.activities.homework && fichaLectura.activities.homework.title && (
                        <div>
                            <p><strong className="text-azulpathbooks">Asignar tarea:</strong></p>
                            <p><strong>{fichaLectura.activities.homework?.title?.es}</strong></p>
                            <p className="text-sm text-gray-600">{fichaLectura.activities.homework?.content?.es}</p>
                        </div>
                    )}
                </div>
            </div>
             )}
            <div className="pagination-print m-20 text-sm" >
                Página 2
            </div>
        </div>
    );
});


const FichaPathbook = ({fichaLectura, lectura, lecturaProperties}) => {
    const componentRef = useRef(null);

    const imprimir = () => {
        window.print();
    };

    return (
        <div className="max-w-6xl bg-white-100">
            <div style={{position: 'relative'}} className="max-w-6xl">
                <div className="navbar bg-neutral text-neutral-content">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h8m-8 6h16"/>
                                </svg> Menú
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52">
                                <li>
                                    <a href={"https://web.pathbooks.app/pathbook/" + lectura.lecturaId} target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faBook} style={{width: "18px", height: "18px"}}/>
                                        Ir a libro
                                    </a>
                                </li>
                                <li>
                                    <ReactToPrint
                                        trigger={() => (
                                            <a onClick={imprimir}>
                                                <FontAwesomeIcon icon={faPrint} style={{width: "18px", height: "18px"}}/>
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
                            <li >
                                <a className="btn btn-ghost" href={"https://web.pathbooks.app/pathbook/" + lectura.lecturaId} target="_blank"
                                   rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faBook} style={{width: "18px", height: "18px"}}/>
                                    <span className="ml-1">Ir a libro</span>
                                </a>
                            </li>
                            <li>
                                <ReactToPrint
                                    trigger={() => (
                                        <a  className="btn btn-ghost" onClick={imprimir} style={{ display: "flex", alignItems: "center" }}>
                                            <FontAwesomeIcon icon={faPrint} style={{width: "18px", height: "18px"}}/>
                                            <span className="ml-1">Imprimir</span>
                                        </a>
                                    )}
                                    content={() => componentRef.current}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal">
                            <form method="dialog">
                                <a className="btn btn-ghost">
                                    <button style={{ display: "flex", alignItems: "center" }}>
                                        <FontAwesomeIcon icon={faCircleXmark} style={{ width: "18px", height: "18px" }}/>
                                        <span className="ml-2">Cerrar</span>
                                    </button>
                                </a>
                            </form>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white-100  m-4 " style={{overflowY: 'auto', maxHeight: 'calc(100vh - 3rem)'}}>
                <ComponentToPrint fichaLectura={fichaLectura} lectura={lectura} ref={componentRef} lecturaProperties={lecturaProperties}/>
            </div>
        </div>
    );
};

export default FichaPathbook;
