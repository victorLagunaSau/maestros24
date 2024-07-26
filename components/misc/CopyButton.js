import {useState} from 'react';
const CopyButton = ({textToCopy, fileName}) => {
	const [isCopied, setIsCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(textToCopy);
		setIsCopied(true); // Mostrar la alerta
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	return (
		<div>
			<div className="text-blue-500">{isCopied ? "Copiado con exito" : "Clic para copiar"}</div>
			<button
				onClick={handleCopy}
				className="btn btn-outline py-2 px-5 sm:px-8 bg-white-100 border-blue-200 text-blue-500 bg-white-500 hover:bg-blue-200 hover:border-blue-500 hover:text-blue-500 transition-all hover:shadow-blue-200"
			>
				<img src="/assets/Icon/copiar.png" alt="Icono" className="mr-2"/>
				{fileName}
			</button>
		</div>
	);
};
export default CopyButton;