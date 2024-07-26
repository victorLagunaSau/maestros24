import Image from "next/image";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const features = [
	"Antes de Leer.",
	"Durante la lectura",
	"Después de la lectura”.",
]
const ModuloMetodologia = () => {
	const scrollAnimation = useMemo(() => getScrollAnimation(), []);
	return (
		<div className="bg-gradient-to-b from-gray-200 to-white-500 w-full" id="metodologia">
			<div className="flex flex-col w-full  p-6">
				<ScrollAnimationWrapper className="mt-8 mb-6 px-6 sm:px-8 lg:px-16">
					<motion.h3
						variants={scrollAnimation}
						className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-500  mx-auto text-center"
					>
						Metodología pathbooks
					</motion.h3>
				</ScrollAnimationWrapper>
				<div className="max-w-screen-xl mx-auto">
					<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p mr-4">
						<ScrollAnimationWrapper>
							<motion.div className="flex flex-col items-end justify-center ml-auto w-full " variants={scrollAnimation} style={{maxWidth: "400px"}}>
								<p className="text-black-500 text-2xl">
									<br/>
									Al implementar nuestro proyecto te ayudaremos a desarrollar las <strong>3 etapas principales</strong>:
									<br/>
								</p>


								<ul className="text-black-500 self-start list-inside ml-8">
									{features.map((feature, index) => (
											<motion.li
												className="relative circle-check custom-list"
												custom={{duration: 2 + index}}
												variants={scrollAnimation}
												key={feature}
												whileHover={{
													scale: 1.1,
													transition: {
														duration: .2
													}
												}}>
												{feature}
											</motion.li>
										)
									)}
								</ul>
								<p className="text-black-500 ">
									<br/>
									Es muy importante para nosotros darte más información de estas etapas, te invitamos a conocer más dando clic en el siguiente botón.

								</p>
								<Link href="/objetivo">
									<motion.button
										whileHover={{scale: 1.1}}
										whileTap={{scale: 0.9}}
										className="btn-xs flex items-center justify-center rounded-full bg-white border-azulpathbooks border hover:bg-azulpathbooks cursor-pointer"
									>
										<p className="p-4 hover:text-white-500 transition-all text-azulpathbooks">Saber más</p>
									</motion.button>
								</Link>
							</motion.div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper>
							<motion.div variants={scrollAnimation} align="left" style={{maxWidth: "300px", float: "right"}}>
								<Image
									src="/assets/metodologia01.png"
									height={800}
									width={900}

								/>
							</motion.div>
						</ScrollAnimationWrapper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModuloMetodologia;
