import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../../utils/getScrollAnimation";

const FAQ = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const faqs = [
    {
      question: "Pagué una suscripción pero no tengo acceso a la librería",
      answer: "Asegúrate de que tengas la sesión iniciada con la cuenta que hiciste el proceso de pago."
    },
    {
      question: "No puedo abrir un pathbook",
      answer: "Lo más común es que tengas tu memoria cache llena, lo que tienes que hacer es lo siguiente: Ir a configuración, Dar click en el botón borrar libros. Esto hará que tu problema quede solucionado."
    },
    {
      question: "¿La aplicación es segura para los niños?",
      answer: "Sí, tenemos un control parental (modo infantil) para que puedan disfrutar de contenido apropiado para ellos."
    },
    {
      question: "¿Cómo activo el control parental (modo infantil)?",
      answer: "Ir a configuración, Dar click en el modo infantil, Elegir una fecha, esta fecha es importante porque con ella cambiarás a la librería completa."
    },
    {
      question: "La aplicación se queda cargando en la pantalla azul",
      answer: "Asegúrate de tener una buena conexión a internet y la versión más reciente, si el internet no es lo que causa el problema intenta desinstalando e instalando de nuevo."
    },
    {
      question: "Una decisión me manda una página en blanco",
      answer: "Espera un par de segundos, algunos libros contienen imágenes y demoran en cargar la página de acuerdo a tu velocidad de internet."
    },
    {
      question: "La aplicación se cierra después de cierto tiempo",
      answer: "Asegúrate de tener la aplicación actualizada a la versión más reciente, en dado caso que tengas la versión más reciente, desinstala e instala esto resolverá tu problema."
    },
    {
      question: "No puedo ver las imágenes internas de los pathbooks",
      answer: "Asegúrate de tener una conexión de internet estable, en dado caso que tu conexión sea estable asegúrate de tener activada la opción de imágenes: Ir a configuración, Dar click en el switch imágenes."
    },
    {
      question: "No puedo descargar un pathbook",
      answer: "Asegúrate de tener la versión más actualizada de la aplicación, espacio en tu dispositivo móvil y una buena conexión a internet."
    },
    {
      question: "¿Cómo cancelo mi suscripción?",
      answer: "Es muy fácil, la suscripción se cancela de acuerdo al sistema operativo que tengas, si eres usuario Android cancela aquí, si eres usuario de iOS cancela aquí."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white-500 w-full" id="faq">
      <div className="flex flex-col w-full my-0 mt-10 py-4">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-100 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center"
          >
            Preguntas frecuentes (FAQ)
          </motion.h3>
          <motion.p
            className="leading-normal w-10/12 sm:w-10/12 lg:w-10/12 mx-auto my-2 text-center"
            variants={scrollAnimation}
          >
            Aquí encontrarás las respuestas a las preguntas más frecuentes. Si no encuentras la solución a tu problema, por favor contáctanos.
          </motion.p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex justify-center w-full my-0 mt-10 py-4 lg:px-20">
          <motion.div className="join join-vertical w-full" style={{ maxWidth: "1200px" }} variants={scrollAnimation}>
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-arrow join-item border border-base-300">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium bg-blue-100 text-primary-content peer-checked:bg-blue-600 peer-checked:text-blue-100">
                  {index + 1}. {faq.question}
                </div>
                <div className="collapse-content peer-checked:bg-white-100 peer-checked:text-secondary-content">
                  <div className="text-xl">
                    <br />
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.p
            className="leading-normal w-10/12 sm:w-10/12 lg:w-10/12 mx-auto my-2 text-center"
            variants={scrollAnimation}
          >
            Si no encontraste la solución a tu problema, por favor contáctanos. Tu opinión es muy importante.
          </motion.p>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default FAQ;
