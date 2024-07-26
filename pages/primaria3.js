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
		{id: "izquierdo", text: "< Primaria 2", url: "/primaria2"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Primaria 4 >", url: "/primaria4"},
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
					lecturaId: "zhnXRo3MBa0NKCS8EDBK",
					title: "Semana 1",
					error: "Próximamente: La tortuga y la liebre",
					activityMateriales: null,
				}, {
					lecturaId: "4sDoqFXoDA5UThIfmFQK",
					title: "Semana 3",
					error: "Próximamente: ¿Le temes a las inyecciones?",
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
					lecturaId: "j4RX2njM5OORZJTcomF4",
					title: "Semana 1",
					error: "Próximamente: La rosa azul",
					activityMateriales: null,
				}, {
					lecturaId: "UH81edlYdbn0f0McEUMh",
					title: "Semana 3",
					error: "Próximamente: Los guardianes delbosque",
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
					lecturaId: "H1UKEveYDGLc4fxdzj49",
					title: "Semana 1",
					error: "Próximamente: Otra vez Erika",
					activityMateriales: null,
				}, {
					lecturaId: "On8py4JiYaNpIGceIgqU",
					title: "Semana 3",
					error: "Próximamente: Protejamos el medio ambiente",
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
					lecturaId: "FFLkB1HoUVXLBDsAstFW",
					title: "Semana 1",
					error: "Próximamente: Sandra y el unicornio",
					activityMateriales: null,
				}, {
					lecturaId: "bchOmu9FrLDOw3ciRM0c",
					title: "Semana 3",
					error: "Próximamente: El traje nuevo del emperador",
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
					lecturaId: "KthYd1paRrjCMzGBHdNQ",
					title: "Semana 1",
					error: "Próximamente: Sofi quiere jugar futbol",
					activityMateriales: null,
				}, {
					lecturaId: "zRTDPgWBY2dLMMyDo2W9",
					title: "Semana 3",
					error: "Próximamente: Parque mitológico",
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
					lecturaId: "3IepgE8mqlTLZYBZJcCC",
					title: "Semana 1",
					error: "Próximamente: ¡Guerra por los libros!",
					activityMateriales: null,
				}, {
					lecturaId: "pASSumJaqHBekAgUbuHw",
					title: "Semana 3",
					error: "Próximamente: José lo vio todo",
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
					lecturaId: "4dLW1X1XyLN4RR01NwmV",
					title: "Semana 1",
					error: "Próximamente: Mi tornado y yo",
					activityMateriales: null,
				}, {
					lecturaId: "qp0Xw1w2WQE2rxSeIoMr",
					title: "Semana 3",
					error: "Próximamente: Akina, la gatita viajera",
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
					lecturaId: "T4fx4GQQyDSpWqDyFO77",
					title: "Semana 1",
					error: "Próximamente: El Tlacuache y el Fuego",
					activityMateriales: null,
				}, {
					lecturaId: "zg8IdmIGBqXDMqJiiuof",
					title: "Semana 3",
					error: "Próximamente: ¡Cuidemos a nuestras mascotas!",
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
					lecturaId: "6bN7Fga3zGqUkvE4pxM5",
					title: "Semana 1",
					error: "Próximamente: El Lobo con piel de Cordero",
					activityMateriales: null,
				}, {
					lecturaId: "VYFW3A2SNN2Ml5Y1fjik",
					title: "Semana 3",
					error: "Próximamente: La magia de sentir",
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
					lecturaId: "4324324432432",
					title: "Semana 1",
					error: "Próximamente: ¿Qué pasa con el agua?",
					activityMateriales: null,
				}, {
					lecturaId: "4324324432432",
					title: "Semana 3",
					error: "Próximamente: La historia del gran trono",
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
				<SeoHead title="Primaria 3"/>
				<ModuloInicio grado="Primaria 3"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Primaria 3" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
