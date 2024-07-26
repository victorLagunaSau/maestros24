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
		{id: "izquierdo", text: "< Primaria 5", url: "/primaria5"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Secundaria 1 >", url: "/secundaria1"},
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
					lecturaId: "JOZd5redLYaEYjwbwmLd",
					title: "Semana 1",
					error: "Próximamente: Reescribiendo la historia",
					activityMateriales: null,
				}, {
					lecturaId: "bY3MC7dbuY2Ez5qT69z7",
					title: "Semana 3",
					error: "Próximamente: El Verano de Jeimy",
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
					lecturaId: "V4ECWlijSOiOqeL5Y37G",
					title: "Semana 1",
					error: "Próximamente: El chico que sabía volar",
					activityMateriales: null,
				}, {
					lecturaId: "eRECO35I9tDv99VzxXQv",
					title: "Semana 3",
					error: "Próximamente: Robin al rescate",
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
					lecturaId: "81FITSMeSUNzrHEx9hUg",
					title: "Semana 1",
					error: "Próximamente: Los lenguajes del amor",
					activityMateriales: null,
				}, {
					lecturaId: "6OS8DsN0ZOv3QJtEFE7J",
					title: "Semana 3",
					error: "Próximamente: Alina y las semillas de frijol",
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
					lecturaId: "wpzc1fDkL7kaEfZovIdx",
					title: "Semana 1",
					error: "Próximamente: Evocación",
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
			id: "mes5",
			textBtn: "5",
			textTitle: "Mes 5",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "ZTtZ1g4u7F4rrt0QYyBJ",
					title: "Semana 1",
					error: "Próximamente: El principito",
					activityMateriales: null,
				}, {
					lecturaId: "KJJ1pWbTY2ilYRqI8S7A",
					title: "Semana 3",
					error: "Próximamente: Lujan y la vuelta a las estrellas",
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
					lecturaId: "xYOeIIielYLJNUCuO7gh",
					title: "Semana 1",
					error: "Próximamente: El príncipe feliz",
					activityMateriales: null,
				}, {
					lecturaId: "43243254425",
					title: "Semana 3",
					error: "Próximamente: La historia de los emojis",
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
					lecturaId: "S944qkEaB5Zkj6NxzbNI",
					title: "Semana 1",
					error: "Próximamente: Adhara",
					activityMateriales: null,
				}, {
					lecturaId: "432432432423432",
					title: "Semana 3",
					error: "Próximamente: Irena Sendler (biografía interactiva)",
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
					lecturaId: "432434324243",
					title: "Semana 1",
					error: "Próximamente: Leyenda (todavía no sé cuál)",
					activityMateriales: null,
				}, {
					lecturaId: "3wwSoqiMwWpfLETRp6Ek",
					title: "Semana 3",
					error: "Próximamente: El niño que lo vendía todo",
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
					lecturaId: "432434322",
					title: "Semana 1",
					error: "Próximamente: Poesía clásica",
					activityMateriales: null,
				}, {
					lecturaId: "423432423432432",
					title: "Semana 3",
					error: "Próximamente: Mitos",
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
					lecturaId: "kCIkbbXxjRiFe8O1dxtU",
					title: "Semana 1",
					error: "Próximamente: El primer día de secundaria",
					activityMateriales: null,
				}, {
					lecturaId: "3243243242343232",
					title: "Semana 3",
					error: "Próximamente: Pensamiento estrategico",
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
				<SeoHead title="Primaria 6"/>
				<ModuloInicio grado="Primaria 6"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Primaria 6" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
