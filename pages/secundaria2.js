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
		{id: "izquierdo", text: "< Secundaria 1", url: "/secundaria1"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Secundaria 3 >", url: "/secundaria3"},
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
					lecturaId: "vrZ5b7K9R4xtr1of4zTX",
					title: "Semana 1",
					error: "Próximamente: El don de Ángela",
					activityMateriales: null,
				}, {
					lecturaId: "ycEjO8GlU80exDr1qL80",
					title: "Semana 3",
					error: "Próximamente: Ojos en las estrellas",
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
					lecturaId: "LGn0SFzqt9G3dHGkpIsd",
					title: "Semana 1",
					error: "Próximamente: Un nuevo método",
					activityMateriales: null,
				}, {
					lecturaId: "g3kWrDfUhvZgd81arwdG",
					title: "Semana 3",
					error: "Próximamente: Los pájaros deben volar",
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
					lecturaId: "oyiGVXtQCuOlro9Cvo0t",
					title: "Semana 1",
					error: "Próximamente: Rina",
					activityMateriales: null,
				}, {
					lecturaId: "kgKpD4scRKJvrimD5EMl",
					title: "Semana 3",
					error: "Próximamente: Blue Justice 1",
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
					lecturaId: "PoYMP4kdmgqcucNz0zat",
					title: "Semana 1",
					error: "Próximamente: Blue Justice 2",
					activityMateriales: null,
				}, {
					lecturaId: "exhrCYxZqpIW6tV4usrm",
					title: "Semana 3",
					error: "Próximamente: La biblioteca de los sueños",
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
					lecturaId: "ZrBHASmK28cjWtquTzbH",
					title: "Semana 1",
					error: "Próximamente: Señorita mota de polvo",
					activityMateriales: null,
				}, {
					lecturaId: "qAnvUFCk42ZCPUrD7WLZ",
					title: "Semana 3",
					error: "Próximamente: Desde la Nada",
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
					lecturaId: "OlTLAieuwYwprdqrtmyd",
					title: "Semana 1",
					error: "Próximamente: Refugio 17",
					activityMateriales: null,
				}, {
					lecturaId: "Nb8KqVUitBVFbNAL6K5c",
					title: "Semana 3",
					error: "Próximamente: Los irrompibles",
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
					lecturaId: "MlvFlly780Rj26Fz1Rjn",
					title: "Semana 1",
					error: "Próximamente: Roble ciudad de monstruos",
					activityMateriales: null,
				}, {
					lecturaId: "8R6gkLgKwXsgKk9PEEhk",
					title: "Semana 3",
					error: "Próximamente: Criaturas de un mundo muerto",
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
					lecturaId: "AJl7MoqXLfHkQPe8bbbg",
					title: "Semana 1",
					error: "Próximamente: La evolución de mi pie izquierdo",
					activityMateriales: null,
				}, {
					lecturaId: "2RDLycMgllJmfVnNnMsY",
					title: "Semana 3",
					error: "Próximamente: Una apuesta con colmillos",
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
					lecturaId: "IsEcujKwx1goaAI6YzGn",
					title: "Semana 1",
					error: "Próximamente: Algunos fantasmas tienen sombra",
					activityMateriales: null,
				}, {
					lecturaId: "I0HBqaeucscWMhzWeqYS",
					title: "Semana 3",
					error: "Próximamente: Atrapado",
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
					lecturaId: "cWpRf3TOU7HS9UGiY0UG",
					title: "Semana 1",
					error: "Próximamente: Nos cubre el Sauc",
					activityMateriales: null,
				}, {
					lecturaId: "au8eJjMZAepcvFSpMupd",
					title: "Semana 3",
					error: "Próximamente: 20 mil leguas de viaje submarino",
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
				<SeoHead title="Secundaria 2"/>
				<ModuloInicio grado="Secundaria 2"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Secundaria 2" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
