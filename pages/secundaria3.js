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
		{id: "izquierdo", text: "< Secundaria 2", url: "/secundaria2"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Bachillerato 1 >", url: "/bachillerato1"},
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
					lecturaId: "thP7TO1XFfe5vuYpfqoE",
					title: "Semana 1",
					error: "Próximamente: El viaje del sobreviviente",
					activityMateriales: null,
				}, {
					lecturaId: "k2MS8FiegSrGQre65bQ7",
					title: "Semana 3",
					error: "Próximamente: Peces rojos",
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
					lecturaId: "krhxn4kuu1k5Un9JhoF4",
					title: "Semana 1",
					error: "Próximamente: La flor que no quiere crecer",
					activityMateriales: null,
				}, {
					lecturaId: "oF6wIQk9u8MgTbJPRbOL",
					title: "Semana 3",
					error: "Próximamente: Los vestigios del mañana",
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
					lecturaId: "zkyCcm5f2GzsjIt0NmEQ",
					title: "Semana 1",
					error: "Próximamente: Mictlán en la Tierra",
					activityMateriales: null,
				}, {
					lecturaId: "S944qkEaB5Zkj6NxzbNI",
					title: "Semana 3",
					error: "Próximamente: Adhara",
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
					lecturaId: "dGpzlPyfhaO99AZu5xfU",
					title: "Semana 1",
					error: "Próximamente: Esteban contra el ciberbulling",
					activityMateriales: null,
				}, {
					lecturaId: "KoRn5It5ka1Vu4hMcc6C",
					title: "Semana 3",
					error: "Próximamente: Los gritos de la infancia",
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
					lecturaId: "Hp6Nclt99HmmGdTjFsMt",
					title: "Semana 1",
					error: "Próximamente: La paradoja",
					activityMateriales: null,
				}, {
					lecturaId: "4kR8EuMQrjK67F0MEJbo",
					title: "Semana 3",
					error: "Próximamente: Amores cartas y recuerdos",
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
					lecturaId: "PRyhQCqZ8fG1INzwP1nj",
					title: "Semana 1",
					error: "Próximamente: La guerra de los mundos libro 1",
					activityMateriales: null,
				}, {
					lecturaId: "2kzrkpUH7KkOAkCNr31m",
					title: "Semana 3",
					error: "Próximamente: La guerra de los mundos libro 2",
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
					lecturaId: "3Yzxfzh5Sr8bkW7UXnCk",
					title: "Semana 1",
					error: "Próximamente: El ejecutor",
					activityMateriales: null,
				}, {
					lecturaId: "GTHGRMgdxUJYRLexkjs1",
					title: "Semana 3",
					error: "Próximamente: Las horas",
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
					lecturaId: "1vddEkakYbFa1qwAjsi3",
					title: "Semana 1",
					error: "Próximamente: Nicky Casablanca",
					activityMateriales: null,
				}, {
					lecturaId: "lCnRdzSPr7R9sJL1lxHK",
					title: "Semana 3",
					error: "Próximamente: Encuéntrame en el laberinto",
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
					lecturaId: "w6IIJB2AqZWAAygxjNA9",
					title: "Semana 1",
					error: "Próximamente: El paraíso tiene nombre",
					activityMateriales: null,
				}, {
					lecturaId: "2llkOXVp7zNNHDu3cTYs",
					title: "Semana 3",
					error: "Próximamente: Zombies en la prepa",
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
					lecturaId: "v9sQoNM0tSLG6A9xWgay",
					title: "Semana 1",
					error: "Próximamente: Errores del pasado",
					activityMateriales: null,
				}, {
					lecturaId: "PbdcJMdvJnKumkibS9CU",
					title: "Semana 3",
					error: "Próximamente: Tumba de tierra y metal",
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
				<SeoHead title="Secundaria 3"/>
				<ModuloInicio grado="Secundaria 3"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Secundaria 3" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
