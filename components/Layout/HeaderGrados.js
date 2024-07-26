import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
        				style={{
					backgroundImage: "url('/assets/bgheader.jpg')",
				}}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
					<div className="col-start-1 col-end-2 flex items-center">
						<img src="/assets/Logo.png" className="h-8 w-auto" alt=""/>
					</div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-white-500  items-center">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "text-white-500 px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "home"
                  ? " text-blue-100 animation-active "
                  : " text-white-500 hover:text-primary a")
              }
            >
              Inicio
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="planlector"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("planlector");
              }}
              className={
                "text-white-500 px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "planlector"
                  ? " text-blue-100 animation-active "
                  : " text-white-500 hover:text-primary ")
              }
            >
              Plan Lector
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="implementacion"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("implementacion");
              }}
              className={
                "text-white-500 px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "implementacion"
                  ? " text-blue-100 animation-active "
                  : " text-white-500 hover:text-primary ")
              }
            >
              Lecturas
            </LinkScroll>
          </ul>
        </nav>
      </header>
      {/* Navegación móvil */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-white-500">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "text-blue-600 mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "home"
                  ? "  border-primary text-primary"
                  : " border-transparent")
              }
            >
              								<img
									src="/assets/Icon/headerInicio.png"
									alt="Icono"
									style={{width: "28px", height: "28px"}}
								/>
              Inicio
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="planlector"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("planlector");
              }}
              className={
                "text-blue-600 mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "planlector"
                  ? "  border-primary text-primary"
                  : " border-transparent ")
              }
            >
             								<img
									src="/assets/Icon/headerPromo.png"

									alt="Icono"
									style={{width: "28px", height: "28px"}}
								/>
              Plan Lector
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="implementacion"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("implementacion");
              }}
              className={
                "text-blue-600 mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "implementacion"
                  ? "  border-primary text-primary"
                  : " border-transparent ")
              }
            >
								<img
									src="/assets/Icon/headerCalendario.png"
									alt="Icono"
									style={{width: "28px", height: "28px"}}
								/>
              Lecturas
            </LinkScroll>

          </ul>
        </div>
      </nav>
      {/* Fin de la navegación móvil */}
    </>
  );
};

export default Header;
