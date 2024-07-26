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
		{id: "izquierdo", text: "< Kinder 2 ", url: "/kinder2"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Primaria 1 >", url: "/primaria1"},
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
					lecturaId: "w7RmfFix8Y112ZsijUmo",
					title: "Semana 1",
					error: "Próximamente: Partes del cuerpo",
					activityMateriales: null,
				},
				{
					lecturaId: "gEgyeYixqx2YAE9xh3XC",
					title: "Semana 3",
					error: "Próximamente: ¿Quién se ha llevado mi bolsa?",
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
					lecturaId: "g4iE3tVwna1VM1YUp0kJ",
					title: "Semana 1",
					error: "Próximamente: Maurini",
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
			id: "mes3",
			textBtn: "3",
			textTitle: "Mes 3",
			fraceMotivacion: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
			autorfrace: "Anónimo.",
			lecturas: [
				{
					lecturaId: "3vaERaemEeQUFzVQPoRH",
					title: "Semana 1",
					error: "Próximamente: Las orejas de Panchito",
					activityMateriales: null,
				}, {
					lecturaId: "RGf9eeatZzXX0eFBIzMW",
					title: "Semana 3",
					error: "Próximamente: Fantasmaboy",
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
					lecturaId: "0yACBuIo6ormCO1Ee3Dn",
					title: "Semana 1",
					error: "Próximamente: El cuento que salvó al t-rex",
					activityMateriales: null,
				}, {
					lecturaId: "8zyhpnp68DER4mj1x6qZ",
					title: "Semana 3",
					error: "Próximamente: La ardilla asombrosamente amable",
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
					lecturaId: "Yum7Ty26m1ecuuJJ4JIJ",
					title: "Semana 1",
					error: "Próximamente: El Hada Madrina sin hogar",
					activityMateriales: null,
				}, {
					lecturaId: "lBLbg074McAOAGtwt919",
					title: "Semana 3",
					error: "Próximamente: Escuela de colores: Raúl el veloz",
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
					lecturaId: "zrNzA6nnVE5AEZYE4yTJ",
					title: "Semana 1",
					error: "Próximamente: Pequeño rey",
					activityMateriales: null,
				}, {
					lecturaId: "x8hjLw5ocGjYd132y8pQ",
					title: "Semana 3",
					error: "Próximamente: DinoDan",
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
					lecturaId: "S8dPeRTYtLwgORuYbr6N",
					title: "Semana 1",
					error: "Próximamente: El reino de las estrellas",
					activityMateriales: null,
				}, {
					lecturaId: "lxU7leQBvYHXK0uv073Q",
					title: "Semana 1",
					error: "Próximamente: Las mentiras de Gil",
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
					lecturaId: "kgpnQagpWeZWGBjGtgBL",
					title: "Semana 1",
					error: "Próximamente: Pipo y Mino",
					activityMateriales: null,
				}, {
					lecturaId: "j3I2OAqECjDjoFB26la7",
					title: "Semana 3",
					error: "Próximamente: La guitarra - poema",
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
					lecturaId: "hpb7zfQ5OvLQgt8MHFXD",
					title: "Semana 1",
					error: "Próximamente: Carlitos y su osito",
					activityMateriales: null,
				}, {
					lecturaId: "W8Oxwim6crPgK6iqXtq0",
					title: "Semana 3",
					error: "Próximamente: El hombre de jengibre",
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
					lecturaId: "cAsfx8DWF3gUGPwukQy9",
					title: "Semana 1",
					error: "Próximamente: Kokín, el cocodrilo egoísta",
					activityMateriales: null,
				}, {
					lecturaId: "KthYd1paRrjCMzGBHdNQ",
					title: "Semana 3",
					error: "Próximamente: Sofi quiere jugar futbol",
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
				<SeoHead title="Kinder 3"/>
				<ModuloInicio grado="Kinder 3"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Kinder 3" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
