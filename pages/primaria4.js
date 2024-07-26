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
		{id: "izquierdo", text: "< Primaria 3", url: "/primaria3"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Primaria 5 >", url: "/primaria5"},
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
					lecturaId: "anQz5xvjZeSoyFLYhpQp",
					title: "Semana 1",
					error: "Próximamente: Botch: El diario de un villano",
					activityMateriales: null,
				}, {
					lecturaId: "Y4BzvJQ4u0sXRz28lE2q",
					title: "Semana 3",
					error: "Próximamente: Anakin en el mundo de Zorg",
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
					lecturaId: "EBkYF2nXTNzFSFEoN2MX",
					title: "Semana 1",
					error: "Próximamente: ¡Jonrón!",
					activityMateriales: null,
				}, {
					lecturaId: "JsckPshsfKFlqZY50F2Y",
					title: "Semana 3",
					error: "Próximamente: La poción mágica del Dr. Zitro",
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
					lecturaId: "yECMO72sK1COVcT7qJs5",
					title: "Semana 1",
					error: "Próximamente: La petite Cati",
					activityMateriales: null,
				}, {
					lecturaId: "n1htnB8fwd0hCpHlLdg0",
					title: "Semana 3",
					error: "Próximamente: Juan sin miedo",
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
					lecturaId: "4YOq6Q7Zo2HL71jDPXI7",
					title: "Semana 1",
					error: "Próximamente: El brillo de Adler",
					activityMateriales: null,
				}, {
					lecturaId: "IVegM4bl40e80FvawI6Q",
					title: "Semana 3",
					error: "Próximamente: La paz de las especies",
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
					lecturaId: "eCtd5A8M8ZbEC5jD96fM",
					title: "Semana 1",
					error: "Próximamente: Bol3, un robot con gran corazón",
					activityMateriales: null,
				}, {
					lecturaId: "oqB4FFCk4eIbvchekern",
					title: "Semana 3",
					error: "Próximamente: El mundo a través de mis deditos",
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
					lecturaId: "cn37rd26yN8KVft1jROY",
					title: "Semana 1",
					error: "Próximamente: Con antenas en la frente",
					activityMateriales: null,
				}, {
					lecturaId: "FOmkfPFpSCIfxS0qxa4G",
					title: "Semana 3",
					error: "Próximamente: Libertad",
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
					lecturaId: "gQfmKlnb8ZVWQEon95y4",
					title: "Semana 1",
					error: "Próximamente: El silbato del tiempo",
					activityMateriales: null,
				}, {
					lecturaId: "1o7wGSH51Iz0yLWzgQK8",
					title: "Semana 3",
					error: "Próximamente: El Detective ajolote y el misterio del dinosaurio fantasma",
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
					lecturaId: "4432423423423",
					title: "Semana 1",
					error: "Próximamente: Leonardo Da Vinci (biografía interactiva)",
					activityMateriales: null,
				}, {
					lecturaId: "4432423423423",
					title: "Semana 3",
					error: "Próximamente: El origen del mundo",
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
					lecturaId: "4432423423423",
					title: "Semana 1",
					error: "Próximamente: Satoshi Tajiri (biografía interactiva)",
					activityMateriales: null,
				}, {
					lecturaId: "4432423423423",
					title: "Semana 3",
					error: "Próximamente: Poema interactivo",
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
					lecturaId: "4432423423423",
					title: "Semana 1",
					error: "Próximamente: ¡El poder del reciclaje! ",
					activityMateriales: null,
				}, {
					lecturaId: "4432423423423",
					title: "Semana 3",
					error: "Próximamente: Identidad cultural",
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
				<SeoHead title="Primaria 4"/>
				<ModuloInicio grado="Primaria 4"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Primaria 4" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
