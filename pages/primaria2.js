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
		{id: "izquierdo", text: "< Primaria 1", url: "/primaria1"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Primaria 3 >", url: "/primaria3"},
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
					lecturaId: "lBLbg074McAOAGtwt919",
					title: "Semana 1",
					error: "Próximamente: Raúl el veloz",
					activityMateriales: null,
				}, {
					lecturaId: "nZrQfkFmRDd8yySR2fFE",
					title: "Semana 2",
					error: "Próximamente: Las fresas de Lily",
					activityMateriales: null,
				}, {
					lecturaId: "fsXAOJJznWSAtpFmUCxu",
					title: "Semana 3",
					error: "Próximamente: La invitación de cumpleaños",
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
					lecturaId: "Yum7Ty26m1ecuuJJ4JIJ",
					title: "Semana 1",
					error: "Próximamente: El hada madrina sin hogar",
					activityMateriales: null,
				}, {
					lecturaId: "JxBvBkOcYwVMA2KMbnBW",
					title: "Semana 2",
					error: "Próximamente: La mariposa",
					activityMateriales: null,
				}, {
					lecturaId: "lYHN6fZcToJ56qip2WpW",
					title: "Semana 3",
					error: "Próximamente: El viaje del conejo",
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
					lecturaId: "kIdIBRFKuT6xtxcCQ4d8",
					title: "Semana 1",
					error: "Próximamente: Dulce Isaac",
					activityMateriales: null,
				}, {
					lecturaId: "gBydM7gk1QtX8SfBiTD2",
					title: "Semana 2",
					error: "Próximamente: Marie Curie",
					activityMateriales: null,
				}, {
					lecturaId: "iYssFKtfAi11eAA5rg0Y",
					title: "Semana 3",
					error: "Próximamente: El pequeño tzintzun",
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
					lecturaId: "0fWy19XyaVF4MYJ1seow",
					title: "Semana 1",
					error: "Próximamente: El gato con botas",
					activityMateriales: null,
				}, {
					lecturaId: "On8py4JiYaNpIGceIgqU",
					title: "Semana 2",
					error: "Próximamente: Protejamos el medio ambiente",
					activityMateriales: null,
				}, {
					lecturaId: "jY68xoQbjBs7OqJMQFaJ",
					title: "Semana 3",
					error: "Próximamente: Toby y el cuidado del agua",
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
					lecturaId: "jTnDJgB2iGgsANVOpjT6",
					title: "Semana 1",
					error: "Próximamente: El patito feo interactivo",
					activityMateriales: null,
				}, {
					lecturaId: "RbTmvSDVh880NMGWXkTT",
					title: "Semana 2",
					error: "Próximamente: Desayunando con un dragón",
					activityMateriales: null,
				}, {
					lecturaId: "0Supi1nLtAZdqoiTwGTA",
					title: "Semana 3",
					error: "Próximamente: Concurso pegajoso",
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
					lecturaId: "umRFge0qIt89qI2Y6bOt",
					title: "Semana 1",
					error: "Próximamente: El león y el ratón",
					activityMateriales: null,
				}, {
					lecturaId: "teIfdCLMQRvVnZaJDIvZ",
					title: "Semana 2",
					error: "Próximamente: Wicho el sucio",
					activityMateriales: null,
				}, {
					lecturaId: "0IYd5fJhxUnUtzNIpO2s",
					title: "Semana 3",
					error: "Próximamente: El ratón Pérez",
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
					lecturaId: "czBEWLWYyEuA2wBQCN9e",
					title: "Semana 1",
					error: "Próximamente: Mi amigo con ruedas",
					activityMateriales: null,
				}, {
					lecturaId: "Bv6PmGPjcPk7Yt0pT3jk",
					title: "Semana 2",
					error: "Próximamente: Thomas en busca de un hogar",
					activityMateriales: null,
				}, {
					lecturaId: "gEgyeYixqx2YAE9xh3XC",
					title: "Semana 3",
					error: "Próximamente: ¿Quién se ha llevado mi bolsa?",
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
					lecturaId: "EFDsjKy2LdsOHdg4B5Yu",
					title: "Semana 1",
					error: "Próximamente: Mito: El origen de las estrellas",
					activityMateriales: null,
				}, {
					lecturaId: "PrRtqzU7O3rCxvbeyozj",
					title: "Semana 2",
					error: "Próximamente: La hormiguita precavida",
					activityMateriales: null,
				}, {
					lecturaId: "5cVvD9rAMHu8VIrqbBza",
					title: "Semana 3",
					error: "Próximamente: El taco valiente y la rebelión del refrigerador",
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
				<SeoHead title="Primaria 2"/>
				<ModuloInicio grado="Primaria 2"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Primaria 2" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
