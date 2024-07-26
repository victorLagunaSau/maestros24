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
		{id: "izquierdo", text: "< Primaria 6", url: "/primaria6"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Secundaria 2 >", url: "/secundaria2"},
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
					lecturaId: "XVq2xC4ETP32MmL2HZUw",
					title: "Semana 1",
					error: "Próximamente: Las estaciones de Abril",
					activityMateriales: null,
				}, {
					lecturaId: "HCN1foJl6g6ZFIQzBkjw",
					title: "Semana 3",
					error: "Próximamente: VoluntApp",
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
					lecturaId: "UZsAeNLMKg0ABn3l0Dgl",
					title: "Semana 1",
					error: "Próximamente: Tu clave es Danali",
					activityMateriales: null,
				}, {
					lecturaId: "V4ECWlijSOiOqeL5Y37G",
					title: "Semana 3",
					error: "Próximamente: El chico que sabía volar",
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
					lecturaId: "vU5PysWsA6CGQCx9WWc5",
					title: "Semana 1",
					error: "Próximamente: La vida fuera de la Tierra",
					activityMateriales: null,
				}, {
					lecturaId: "dBA5zAuui1DTtaIYlhoI",
					title: "Semana 3",
					error: "Próximamente: Un remedio para el abuelo",
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
					lecturaId: "XZ8YWFnYYZuv9jT5VBsj",
					title: "Semana 1",
					error: "Próximamente: Los aretes de piedra",
					activityMateriales: null,
				}, {
					lecturaId: "6OS8DsN0ZOv3QJtEFE7J",
					title: "Semana 3",
					error: "Próximamente: Kuiret, el mundo de los sueños",
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
					lecturaId: "LgP3YJ1Wb5tiK9DzUdmR",
					title: "Semana 1",
					error: "Próximamente: Una bolita de luz en el pecho",
					activityMateriales: null,
				}, {
					lecturaId: "81FITSMeSUNzrHEx9hUg",
					title: "Semana 3",
					error: "Próximamente: Los lenguajes del amor",
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
					lecturaId: "ErcYTZfT5G0SVilYsWgn",
					title: "Semana 1",
					error: "Próximamente: Mi querido callejero",
					activityMateriales: null,
				}, {
					lecturaId: "3FznSj7lvtxvOSxIct9U",
					title: "Semana 3",
					error: "Próximamente: Licántropo",
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
					lecturaId: "OBHR4ZAT1XkQPGW81SJy",
					title: "Semana 1",
					error: "Próximamente: Jugando con el tiempo",
					activityMateriales: null,
				}, {
					lecturaId: "3OAUFOgZl1EZdSEl1zUy",
					title: "Semana 3",
					error: "Próximamente: Alicia en el país de las maravillas",
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
					lecturaId: "VRBhIyXV5LRmQtycsJit",
					title: "Semana 1",
					error: "Próximamente: En busca de la libertad",
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
			id: "mes9",
			textBtn: "9",
			textTitle: "Mes 9",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "wpzc1fDkL7kaEfZovIdx",
					title: "Semana 1",
					error: "Próximamente: Evocación",
					activityMateriales: null,
				}, {
					lecturaId: "kOpYAWLFX369OxmgQPAo",
					title: "Semana 3",
					error: "Próximamente: La ventana abierta",
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
					lecturaId: "PqcHj3gSwx2BKKTXE1w6",
					title: "Semana 1",
					error: "Próximamente: Festival Ironwound",
					activityMateriales: null,
				}, {
					lecturaId: "G0ryfuiETovTMX9RH2Km",
					title: "Semana 3",
					error: "Próximamente: Dark Forest",
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
				<SeoHead title="Secundaria 1"/>
				<ModuloInicio grado="Secundaria 1"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Secundaria 1" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
