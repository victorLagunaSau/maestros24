import React, { useState } from 'react';
import fileConfig from "./MosaicoData"

const DownloadButton = ({buttonName, tipo}) => {
	const fileClasse = {
		boton: {
			azul: "w-60 shadow-md rounded p-3 m-2 bg-gray-200 border-blue-300 text-azulpathbooks hover:bg-blue-200 hover:border-blue-600 hover:text-azulpathbooks min-w-300",
			gris: "w-40 rounded p-3 m-2 bg-white-500 border-gray-300 text-gray-600 text-xs hover:bg-gray-100 hover:border-gray-600 hover:text-gray-600 min-w-300",
			color: "w-80 p-3 m-2 bg-gray-100 text-azulpathbooks hover:bg-gray-200 hover:text-azulpathbooks min-w-300",
		},
		icono: {
			azul: {height: "40px", marginLeft: 'auto', marginRight: 'auto'},
			gris: {height: "20px", marginLeft: 'auto', marginRight: 'auto'},
			color: {height: "60px", marginLeft: 'auto', marginRight: 'auto'},
		},
		textMei: {
			azul: "text-xs text-blue-900",
			gris: "text-xs text-gray-400",
			color: "text-sm text-blue-400",
		}
	};


   const cleanButtonName = (buttonName || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, '');
    const currentFileConfig = fileConfig[cleanButtonName] || {};

    const [hovering, setHovering] = useState(false);

    const handleMouseEnter = () => {
        setHovering(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
    };

    // Verificar si buttonName está definido y no es una cadena vacía
    if (!buttonName) {
        return null; // No renderizar nada si buttonName no está definido
    }

    return (
        <button
            id={currentFileConfig.id}
            className={fileClasse.boton[tipo]}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {hovering && (
                <ul>
                    <p>Abarca temas de:</p>
                    {currentFileConfig.content.map((ambito, index) => (
                        <li className="text-xs text-black-100" key={index}>{ambito}</li>
                    ))}
                </ul>
            )}
            {!hovering && (
                <>
                    {/* Usar el iconSrcAzul solo si hay un icono correspondiente */}
                    {currentFileConfig.iconSrc && (
                        <img
                            src={currentFileConfig.iconSrc[tipo]}
                            alt="Icono"
                            style={fileClasse.icono[tipo]}
                        />
                    )}
                    {buttonName}
                    {tipo !== 'gris' && (
                        <h3 className="text-xs">Mosaico educativo integral (MEI)</h3>
                    )}
                </>
            )}
        </button>
    );
};

export default DownloadButton;