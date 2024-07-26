import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";

const HomeButton = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
        <LinkScroll
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
          className="btn btn-outline py-2 px-5 sm:px-8 border-blue-200 text-blue-200 bg-white-500 hover:bg-azulpathbooks hover:text-blue-200 transition-all hover:shadow-azulpathbooks"
        >
          <img src="/assets/Icon/backhome.png" alt="Icono" style={{maxWidth: "20px"}}/>
          Regresar a Inicio
        </LinkScroll>
  );
};

export default HomeButton;
