import React from 'react';
const obtenergrado = (grado) => {
	switch (grado) {
		case 'K1':
			return '1° Kinder';
		case 'K2':
			return '2° Kinder';
		case 'K3':
			return '3° Kinder';
		case 'G1':
			return '1° Primaria';
		case 'G2':
			return '2° Primaria';
		case 'G3':
			return '3° Primaria';
		case 'G4':
			return '4° Primaria';
		case 'G5':
			return '5° Primaria';
		case 'G6':
			return '6° Primaria';
		case 'G7':
			return '1° Secundaria';
		case 'G8':
			return '2° Secundaria';
		case 'G9':
			return '3° Secundaria';
		case 'G10':
			return '1° Bachillerato';
		case 'G11':
			return '2° Bachillerato';
		case 'G12':
			return '3° Bachillerato';
		default:
			return grado;
	}
};
const ButtonGrado = ({grados}) => {
	return (
		<>
				<p className="text-xs"><strong>{grados.map(grado => obtenergrado(grado)).join(', ')}</strong></p>
		</>
	);
};

export default ButtonGrado;