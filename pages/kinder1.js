
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
		{id: "izquierdo", text: "Inicio ", url: "/"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Kinder 2 >", url: "/kinder2"},
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
	  activityMateriales: "lápiz y papel",
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
					lecturaId: "vAQZGDW4miEa7NeDnjBd",
					title: "Semana 1",
					error: "Próximamente: Los números",
					activityMateriales: "lápiz y papel",
				},
				{
					lecturaId: "c9kSs40mXYBU92Dcqanw",
					title: "Semana 3",
					error: "Próximamente: Tito el gatito",
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
					lecturaId: "uS5xQUu7W70o9FyZDSHV",
					title: "Semana 1",
					error: "Próximamente: Las Vocales",
					activityMateriales: null,
				}, {
					lecturaId: "1jdXA2wsqmyZoOHsxjmq",
					title: "Semana 3",
					error: "Próximamente: Larry y Deisy",
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
					lecturaId: "5lVeEtslpJcR59u5R8tQ",
					title: "Semana 1",
					error: "Próximamente: Mascotas",
					activityMateriales: null,
				}, {
					lecturaId: "xZr8w28cOgd2cFYZhgTE",
					title: "Semana 3",
					error: "Próximamente: La cenicienta",
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
					lecturaId: "Ulhuf2cu9ENlHUJrxAe6",
					title: "Semana 1",
					error: "Próximamente: Animales del mar",
					activityMateriales: null,
				}, {
					lecturaId: "v8DkZLfbJ2Vf3RafUtGF",
					title: "Semana 3",
					error: "Próximamente: Conoce a Edgar",
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
					lecturaId: "KZMnpfDhmUaBpP92Dpfz",
					title: "Semana 1",
					error: "Próximamente: Animales de granja",
					activityMateriales: null,
				}, {
					lecturaId: "oTi5JbpEt8HSsQUguRYa",
					title: "Semana 3",
					error: "Próximamente: La abejita inquieta",
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
					lecturaId: "l42iVpyDsRLXHAAFa9Ms",
					title: "Semana 1",
					error: "Próximamente: Abecedario",
					activityMateriales: null,
				}, {
					lecturaId: "WVWGoHW5eBJXoDobut6e",
					title: "Semana 3",
					error: "Próximamente: El gallo Payo",
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
					lecturaId: "9grAeUYtxKATm60jpAZX",
					title: "Semana 1",
					error: "Próximamente: Cancionero: Volumen I",
					activityMateriales: null,
				}, {
					lecturaId: "EvljLjisWV8xE2SLlydc",
					title: "Semana 3",
					error: "Próximamente: Que alguien ayude a Bella",
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
					lecturaId: "VtctnrWuo7o2TwCEe9Ju",
					title: "Semana 1",
					error: "Próximamente: El monstruo despertador",
					activityMateriales: null,
				}, {
					lecturaId: "SAb44bVa9TQBSlsQZrxF",
					title: "Semana 3",
					error: "Próximamente: Chip, chip, llueve sin parar",
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
					lecturaId: "IBLjA0cwhRdWpO1rQZoM",
					title: "Semana 1",
					error: "Próximamente: La crayola mágica",
					activityMateriales: null,
				}, {
					lecturaId: "H3Ts3cmPqN3BIyf0nUUS",
					title: "Semana 3",
					error: "Próximamente: Pelea de comida",
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
					lecturaId: "0g6k9Eq5di6XQxEzvnN6",
					title: "Semana 1",
					error: "Próximamente: Lula la Chihuahua",
					activityMateriales: null,
				}, {
					lecturaId: "DNN1r4OhfSR4KpIxsEc2",
					title: "Semana 3",
					error: "Próximamente: Este cuento no se cuenta solo",
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
				<SeoHead title="Kinder 1"/>
				<ModuloInicio grado="Kinder 1"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Kinder 1" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
