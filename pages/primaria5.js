import ModuloInicio from "../components/InicioGrados";
import ModuloOtrosGrados from "../components/ModuloOtrosGrados";
import ModuloPlanLector from "../components/ModuloPlanLector";
import ModuloObjetivos from "../components/ObjetivosPathbook/Objetivos";
import ModuloMetodologia from "../components/ModuloMetodologia";
import ModuloImplementacionMensual from "../components/ImplementacionMensual/ModuloImplementacionMensual";
import LayoutGrados from "../components/Layout/LayoutGrados";
import SeoHead from "../components/SeoHead";
import MEI from "../components/MosaicoEducativo/MosaicoEducativo";

export default function Home() {

	const botonesOtrosGrados = [
		{id: "izquierdo", text: "< Primaria 4", url: "/primaria4"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Primaria 6 >", url: "/primaria6"},
	];

	const botonesPlanLector = [
		{id: "objetivos", text: "Objetivos"},
		{id: "metodologia", text: "Metodología Pathbooks"},
		{id: "mei", text: "Mosaico educativo integral (MEI)"},
	];

	const lecturaProperties = {
	  preguntasInferencialesTitulo: "Preguntas Inferenciales",
	  preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
	  recomendacionLectura: [
		{
		  titulo: "Lectura en grupo:",
		  recomendacion: "Realizar la lectura en voz alta en el aula para que los estudiantes escuchen la historia y tomen decisiones en conjunto. Puede ser dirigida por el maestro o por turnos entre los estudiantes. Es importante abrir el debate después de cada decisión."
		},
		{
		  titulo: "Lectura individual:",
		  recomendacion: "Permitir que los estudiantes abran la lectura en un dispositivo y se les otorguen 11 minutos para llegar a un final."
		},
		{
		  titulo: "Lectura en casa:",
		  recomendacion: "Encargar a cada estudiante que lea la historia de manera individual en casa. Esta actividad puede ser realizada como tarea personal o familiar, según lo decida el maestro."
		}
	  ],
	  activityMateriales: null,
	  activityMaterialDescarga: null,
	  homeworkMateriales: null,
	  homeworkMaterialDescarga: null,
};

	const meses = [
		{
			id: "mes1",
			textBtn: "1",
			textTitle: "Mes 1",
			fraceMotivacion: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
			autorfrace: "Nelson Mandela.",
			lecturas: [
				{
					lecturaId: "74qpMoFckC94VhY6nYPa",
					title: "Semana 1",
					error: "Próximamente: La canción de las luciérnagas",
					activityMateriales: null,
				}, {
					lecturaId: "AJl7MoqXLfHkQPe8bbbg",
					title: "Semana 3",
					error: "Próximamente: La evolución de mi pie izquierdo",
					activityMateriales: null,
				}
			],
			checked: true
		},
		{
			id: "mes2",
			textBtn: "2",
			textTitle: "Mes 2",
			fraceMotivacion: "La educación es el camino hacia el futuro. El mañana pertenece a aquellos que se preparan para él hoy.",
			autorfrace: "Malcolm X.",
			lecturas: [
				{
					lecturaId: "XVq2xC4ETP32MmL2HZUw",
					title: "Semana 1",
					error: "Próximamente: Las Estaciones de Abril",
					activityMateriales: null,
				}, {
					lecturaId: "dHhRLVNL0VwJIEAycIDw",
					title: "Semana 3",
					error: "Próximamente: Jeff, la mangosta con sombrero de bombín",
					activityMateriales: null,
				}
			],
			checked: false
		},
		{
			id: "mes3",
			textBtn: "3",
			textTitle: "Mes 3",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "vrZ5b7K9R4xtr1of4zTX",
					title: "Semana 1",
					error: "Próximamente: El don de Ángela",
					activityMateriales: null,
				}, {
					lecturaId: "Mx5vviQqMaFv9cFpDRg4",
					title: "Semana 3",
					error: "Próximamente: Cuevas de Sol y Tierra",
					activityMateriales: null,
				}
			],
			checked: false
		},
		{
			id: "mes4",
			textBtn: "4",
			textTitle: "Mes 4",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "mAEVWFS3FdcoFM810P3W",
					title: "Semana 1",
					error: "Próximamente: El Fantasma de Canterville",
					activityMateriales: null,
				}, {
					lecturaId: "zOGtNcnwlY65sdxApVoQ",
					title: "Semana 3",
					error: "Próximamente: El juego de la aventura",
					activityMateriales: null,
				}
			],
			checked: false
		},
		{
			id: "mes5",
			textBtn: "5",
			textTitle: "Mes 5",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "BG1OLstTT2ktef12fUHN",
					title: "Semana 1",
					error: "Próximamente: ¿Mi mamá?... ¡Es la mejor!",
					activityMateriales: null,
				}, {
					lecturaId: "0XOyLUVSoNvwSdghaPfk",
					title: "Semana 3",
					error: "Próximamente: Friki Katy",
					activityMateriales: null,
				}
			],
			checked: false
		},
		{
			id: "mes6",
			textBtn: "6",
			textTitle: "Mes 6",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "9XJJT94WrxwYJCLCyldh",
					title: "Semana 1",
					error: "Próximamente: Ronaldinha y las Valquirias del fútbol",
					activityMateriales: null,
				}, {
					lecturaId: "LTpeWQqxpm0ZiAkAhOX7",
					title: "Semana 3",
					error: "Próximamente: Oti, en un mundo sin personas",
					activityMateriales: null,
				}
			],
			checked: false
		},
		{
			id: "mes7",
			textBtn: "7",
			textTitle: "Mes 7",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "Q2XQFM3UepvCDuao17NH",
					title: "Semana 1",
					error: "Próximamente: Lucas viaja al centro de la tierra",
					activityMateriales: null,
				}, {
					lecturaId: "gwDoySWNc83WHgj6oLNx",
					title: "Semana 3",
					error: "Próximamente: Lucas en el espacio",
					activityMateriales: null,
				}
			],
			checked: false
		},
		{
			id: "mes8",
			textBtn: "8",
			textTitle: "Mes 8",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "lRg0SUq08lVbJtLx4tbL",
					title: "Semana 1",
					error: "Próximamente: Atenea Net",
					activityMateriales: null,
				}, {
					lecturaId: "432423423432",
					title: "Semana 3",
					error: "Próximamente: ¿Cómo hacer una fanzine?",
					activityMateriales: null,
				}
			],
			checked: false
		},
		{
			id: "mes9",
			textBtn: "9",
			textTitle: "Mes 9",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "432423423432",
					title: "Semana 1",
					error: "Próximamente: Poema clásico",
					activityMateriales: null,
				}, {
					lecturaId: "432423423432",
					title: "Semana 3",
					error: "Próximamente: Leyendas latinoamericanas",
					activityMateriales: null,
				}
			],
			checked: false
		},
		{
			id: "mes10",
			textBtn: "10",
			textTitle: "Mes 10",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "432423423432",
					title: "Semana 1",
					error: "Próximamente: Shigeru Miyamoto (biografía interactiva)",
					activityMateriales: null,
				}, {
					lecturaId: "432423423432",
					title: "Semana 3",
					error: "Próximamente: Narración y su orden lógico",
					activityMateriales: null,
				}
			],
			checked: false
		}
	];

	const preguntasInferenciales =
		{
			titulo: "Preguntas Inferenciales",
			recomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura."

		};
	const recomendacionLectura = [
		{
			titulo: "Lectura en grupo:",
			recomendacion: "Realizar la lectura en voz alta en el aula para que los estudiantes escuchen la historia y tomen decisiones en conjunto. Puede ser dirigida por el maestro o por turnos entre los estudiantes. Es importante abrir el debate después de cada decisión."
		},
		{
			titulo: "Lectura individual:",
			recomendacion1: "Permitir que los estudiantes abran la lectura en un dispositivo y se les otorguen ",
			recomendacion2: "minutos para llegar a un final."
		},
		{
			titulo: "Lectura en casa:",
			recomendacion: "Encargar a cada estudiante que lea la historia de manera individual en casa. Esta actividad puede ser realizada como tarea personal o familiar, según lo decida el maestro."
		}
	]


	return (
		<>
			<LayoutGrados>
				<SeoHead title="Primaria 5"/>
				<ModuloInicio grado="Primaria 5"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Primaria 5" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
