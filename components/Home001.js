import React, {useMemo, useState, useEffect} from "react";
import {Link as LinkScroll} from "react-scroll";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Home001 = () => {
	const [scrollActive, setScrollActive] = useState(false);
	 const [activeLink, setActiveLink] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrollActive(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const scrollAnimation = useMemo(() => getScrollAnimation(), []);
	const links = [
		{id: "kinder", text: "Kinder"},
		{id: "primaria", text: "Primaria"},
		{id: "secundaria", text: "Secundaria"},
		{id: "bachillerato", text: "Bachillerato"},

	];
	return (
		<div className="" id="home" style={{backgroundImage: "url('/assets/bgheader.jpg')",}}>
			<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2">
				<ScrollAnimationWrapper className="mt-20">
					<motion.div className="flex flex-col items-end ml-auto w-full lg:w-9/12 p-4 my-6" variants={scrollAnimation}>
						<h3 className="text-3xl lg:text-3xl font-medium text-white-100">
							Recursos y herramientas para <strong className="text-warning">Maestros</strong>.
							<div className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 gap-2 mt-10">
							{links.map((link) => (
							<LinkScroll
								key={link.id}
								activeClass="active"
								to={link.id}
								spy={true}
								smooth={true}
								duration={1000}
								onSetActive={() => setActiveLink(link.id)}
										className="btn btn-outline py-2 px-5 sm:px-8 border-blue-400 text-blue-400 bg-white-500 hover:bg-blue-700 hover:text-blue-400 transition-all hover:shadow-blue-700"
							>
								{link.text}
							</LinkScroll>
						))}
						</div>
						</h3>

					</motion.div>
				</ScrollAnimationWrapper>
				<ScrollAnimationWrapper style={{ alignSelf: "flex-end" }}>
					<motion.div variants={scrollAnimation} className="hidden lg:inline-block" >
						<Image
							src="/assets/headermaestra.png"
							height={270} // Mitad del tamaño original (370 / 2)
							width={300}  // Mitad del tamaño original (400 / 2)
						/>
					</motion.div>
				</ScrollAnimationWrapper>
			</div>
		</div>
	);
};

export default Home001;
