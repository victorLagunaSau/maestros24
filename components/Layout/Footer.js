import React from "react";

const Footer = () => {
	return (
		<div className="bg-gray-200 pt-44 pb-24">
			<div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
				<div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
					<img
						src="/assets/LogoAzul.png"
						className="h-8 w-auto mb-6"
						alt=""
					/>
					<p className="mb-4">
						<strong className="font-medium">Pathbooks</strong> La plataforma de lectura más innovadora del mundo.
					</p>
					<div className="flex w-full mt-2 mb-8 -mx-2">
						<div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
							<a
								href="https://www.facebook.com/pathbooks"
								target="_blank"
								rel="noopener noreferrer"

							>
								<img
									src="/assets/Icon/facebook.svg"
									className="h-6 w-6"
									alt="https://www.facebook.com/pathbooks"
								/>
							</a>

						</div>
						<div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
							<a
								href="https://twitter.com/hashtag/Pathbooks"
								target="_blank"
								rel="noopener noreferrer"

							>
								<img
									src="/assets/Icon/twitter.svg"
									className="h-6 w-6"
									alt=""
								/>
							</a>
						</div>
						<div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
							<a
								href="https://www.instagram.com/pathbooks/"
								target="_blank"
								rel="noopener noreferrer"

							>
								<img
									src="/assets/Icon/instagram.svg"
									className="h-6 w-6"
									alt=""
								/>
							</a>
						</div>
					</div>
					<p className="text-gray-400">©{new Date().getFullYear()} - Pathbooks</p>
				</div>
				<div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
					<p className="text-black-600 mb-4 font-medium text-lg">Descarga</p>
					<ul className="text-black-500 ">
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all" >
							<a href="https://apps.apple.com/es/app/pathbooks-libros-y-audiolibros/id1233961624" target="_blank">iOS</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="https://play.google.com/store/apps/details?id=com.livingabook.app" target="_blank">Android</a>
						</li>
					</ul>
					<br/>
					<p className="text-black-600 mb-4 font-medium text-lg">Lectura Web</p>
					<ul className="text-black-500 ">
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="https://web.pathbooks.app/" target="_blank">Web de lectura</a>
						</li>
					</ul>
				</div>
				<div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
					<p className="text-black-600 mb-4 font-medium text-lg">Sitios Web</p>
					<ul className="text-black-500">
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="" target="_blank">Escuelas</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="" target="_blank">Materiales para Maestros</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="https://www.pathbooks.app/escuelas" target="_blank">Escuelas</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="https://www.pathbooks.app/lector" target="_blank">Plan lector</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="https://www.pathbooks.app/" target="_blank">pathbooks.app</a>
						</li>
					</ul>
				</div>
				<div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
					<p className="text-black-600 mb-4 font-medium text-lg">Ayuda</p>
					<ul className="text-black-500">
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="mailto:soporte@pathbooks.app" target="_blank">Soporte técnico</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="https://www.pathbooks.app/faq" target="_blank">FAQ</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="mailto:soporte@pathbooks.app" target="_blank">Contacto</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="https://www.pathbooks.app/terms" target="_blank">Términos y condiciones</a>
						</li>
						<li className="my-2 hover:text-azulpathbooks cursor-pointer transition-all">
							<a href="https://www.pathbooks.app/terms" target="_blank">Aviso de privacidad</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
