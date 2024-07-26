import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import CopyButton from "../../components/misc/CopyButton";
import LinkButton from "../../components/misc/LinkButton";

const events = [
  {
    title: "Encuentro con Autores de Pathbooks.",
    description: "Agenda un encuentro virtual con el autor o autora favorito de tus alumnos."+
                  "Los alumnos conocerán su proceso creativo, resolverán las preguntas que les generó la historia y pasarán un momento ameno e inspirador."+
                  "Soporte Técnico Pathbooks.",
    image: "https://distribuidores.pathbooks.app/_next/image?url=%2Fassets%2F05Calendario.png&w=384&q=75",
    url: "mailto:soporte@pathbooks.app",
    buttonName: "Solicita tu encuentro",
    tipo: "email",
  },
  {
    title: "CONCURSO ESCOLAR DE ESCRITURA",
    description: "Pathbooks te invita al CONCURSO ESCOLAR DE ESCRITURA INTERACTIVA 2023 - 2024 "+
                  "“Héroes y Heroínas”, con el objetivo de fomentar la creación literaria en escuelas que actualmente estén implementando la metodología Pathbooks. "+
                  "La recepción de Pathbooks comenzará el 15 de Febrero del 2024 y finalizará "+
                  "el 15 de Abril del 2024 a las 23:59 hora Ciudad de México.",
    image: "https://www.pathbooks.app/images/concurso/concurso-2023-2024/logoConcurso.png",
    url: "https://www.pathbooks.app/concurso-escritura",
    buttonName: "Registrate",
    tipo: "web",
  },
  {
    title: "Cuentacuentos",
    description: "¡Agenda tu sesión de Cuentacuentos para tu escuela!."+
    "Las sesiones son virtuales: "+
    "Recomendado para: Kinder, Primaria baja y Primaria Alta.",
    image: "https://distribuidores.pathbooks.app/_next/image?url=%2Fassets%2F04Calendario.png&w=384&q=75",
    url: "https://wa.me/528124086577",
    buttonName: "Agenda por WhatsApp",
    tipo: "whatsapp",
  },
];

const EventosPathbooks = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="bg-gradient-to-b from-gray-200 to-white-500 w-full" id="eventospathbooks">
      <div className="flex flex-col w-full my-0 mt-10 py-4">
        <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-primary text-3xl sm:text-3xl lg:text-4xl font-medium leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center"
            >
              Eventos Pathbooks
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="flex flex-col items-center gap-8 py-8 my-12">
            {events.map((event, index) => (
              <ScrollAnimationWrapper key={index}>
                <motion.div variants={scrollAnimation} className="flex flex-col items-center bg-white rounded shadow-lg p-6 max-w-lg w-full">
                   <img
                    src={event.image}
                    alt={event.title}
                    layout="responsive"
                    width={500}
                    height={null}
                    className="rounded"
                  />
                  <h3 className="text-3xl lg:text-4xl font-bold leading-relaxed text-black-500 mt-4 text-center">
                    {event.title}
                  </h3>
                  <p className="text-black-500 text-center mt-2">{event.description}</p>
                  <div className="flex flex-col items-center mt-4">
                    <LinkButton buttonName={event.buttonName} hrefUrl={event.url} linkTipo={event.tipo} size={30} />
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventosPathbooks;
