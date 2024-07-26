import React, {useState, useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {auth} from "../../firebase/firebaseIni";

const Header = () => {
	const [activeLink, setActiveLink] = useState(null);
	const [scrollActive, setScrollActive] = useState(false);
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = auth().onAuthStateChanged((user) => {
			setUser(user);
		});
		window.addEventListener("scroll", () => {
			setScrollActive(window.scrollY > 20);
		});
		const {pathname} = router;
		if (pathname.includes("/soportetecnico")) {
			setActiveLink("soportetecnico");
		} else if (pathname.includes("/eventospathbooks")) {
			setActiveLink("eventospathbooks");
		} else if (pathname.includes("/escuelas")) {
			setActiveLink("escuelas");
		} else if (pathname.includes("/login")) {
			setActiveLink("login");
		} else {
			setActiveLink("inicio");
		}
		return () => {
			window.removeEventListener("scroll", () => {
				setScrollActive(window.scrollY > 20);
			});
			unsubscribe();
		};
	}, [router.pathname]);

	return (
		<>
			<header
				className={
					"fixed top-0 w-full z-30 bg-white-500 transition-all " +
					(scrollActive
						? " shadow-md pt-4 lg:pt-0"
						: " pt-5 lg:pt-4")
				}
				style={{
					backgroundImage: "url('/assets/bgheader.jpg')",
				}}
			>
				<nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-3">
					<div className="col-start-1 col-end-2 flex items-center">
						<img src="/assets/Logo.png" className="h-8 w-auto" alt=""/>
					</div>
					<ul className="hidden lg:flex col-start-4 col-end-8 text-white-100  items-center">
						<Link href="/">
							<a
								onClick={() => setActiveLink("")}
								className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
									activeLink === "inicio"
										? "text-warning animation-active"
										: "text-white-100 hover:text-warning"
								}`}
							>
								Inicio
							</a>
						</Link>
						<Link href="/soportetecnico">
							<a
								onClick={() => setActiveLink("soportetecnico")}
								className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
									activeLink === "soportetecnico"
										? "text-warning animation-active"
										: "text-white-100 hover:text-warning"
								}`}
							>
								Soporte Técnico
							</a>
						</Link>
						<Link href="/eventospathbooks">
							<a
								onClick={() => setActiveLink("eventospathbooks")}
								className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
									activeLink === "eventospathbooks"
										? "text-warning animation-active"
										: "text-white-100 hover:text-warning"
								}`}
							>
								Eventos Pathbooks
							</a>
						</Link>
						{user && (
							<Link href="/escuelas">
								<a
									onClick={() => setActiveLink("escuelas")}
									className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative ${
										activeLink === "escuelas"
											? "text-warning animation-active"
											: "text-white-100 hover:text-warning"
									}`}
								>
									Escuelas
								</a>
							</Link>
						)}
					</ul>
				</nav>
			</header>

			{/* Mobile Navigation */}
			<nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
				<div className="bg-white-500 sm:px-3">
					<ul className="flex w-full justify-between items-center text-azulpathbooks">
						<Link href="/">
							<a
								onClick={() => setActiveLink("inicio")}
								className={
									"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
									(activeLink === "inicio"
										? "bg-blue-100 border-azulpathbooks text-azulpathbooks"
										: "border-transparent")
								}
							>
								<img
									src="/assets/Icon/headerInicio.png"
									alt="Icono"
									style={{width: "28px", height: "28px"}}
								/>
								Inicio
							</a>
						</Link>
						<Link href="/soportetecnico">
							<a
								onClick={() => setActiveLink("soportetecnico")}
								className={
									"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
									(activeLink === "soportetecnico"
										? "bg-blue-100 border-azulpathbooks text-azulpathbooks"
										: "border-transparent")
								}
							>
								<img
									src="/assets/Icon/headerPromo.png"
									alt="Icono"
									style={{width: "28px", height: "28px"}}
								/>
								Soporte Técnico
							</a>
						</Link>
						<Link href="/eventospathbooks">
							<a
								onClick={() => setActiveLink("eventospathbooks")}
								className={
									"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
									(activeLink === "eventospathbooks"
										? "bg-blue-100 border-azulpathbooks text-azulpathbooks"
										: "border-transparent")
								}
							>
								<img
									src="/assets/Icon/headerCalendario.png"
									alt="Icono"
									style={{width: "28px", height: "28px"}}
								/>
								Eventos
							</a>
						</Link>
						{user && (
							<Link href="/escuelas">
								<a
									onClick={() => setActiveLink("escuelas")}
									className={
										"mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
										(activeLink === "escuelas"
											? "bg-blue-100 border-azulpathbooks text-azulpathbooks"
											: "border-transparent")
									}
								>
									<img
										src="/assets/Icon/headerMarca.png"
										alt="Icono"
										style={{width: "28px", height: "28px"}}
									/>
									Escuelas
								</a>
							</Link>
						)}
					</ul>
				</div>
			</nav>
			{/* End Mobile Navigation */}
		</>
	);
};

export default Header;
