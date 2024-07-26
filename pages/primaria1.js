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
		{id: "izquierdo", text: "< Kinder 3", url: "/kinder3"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Primaria 2 >", url: "/primaria2"},
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
					lecturaId: "IPHZbcyg3NkQiXT3POfn",
					title: "Semana 1",
					error: "Próximamente: Koumba y la noche de las manchas negras",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "q3Bj4e4qafKJuCP9j7yr",
					title: "Semana 2",
					error: "Próximamente: El topo y otros animales",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "WVWGoHW5eBJXoDobut6e",
					title: "Semana 3",
					error: "Próximamente: El gallo Payo",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
					activityMaterialDescarga: null,
					activityMaterialSugerencia: null,
					homeworkMateriales: null,
					homeworkMaterialDescarga: null,
					homeworkMaterialSugerencia: null,
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
					lecturaId: "S0vGRb8SkpsSs4TJZHHc",
					error: "Próximamente: Vincent Van Gogh",
					title: "Semana 1",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				}, {
					lecturaId: "0CsZqkOpS6y0SenReZ3D",
					title: "Semana 2",
					error: "Próximamente: Giovanna Galletas",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "hnOvWDfU1fNm2LJ3ZRMa",
					title: "Semana 3",
					error: "Próximamente: William Kamkwamba",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
					activityMaterialDescarga: null,
					activityMaterialSugerencia: null,
					homeworkMateriales: null,
					homeworkMaterialDescarga: null,
					homeworkMaterialSugerencia: null,
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
					lecturaId: "8zyhpnp68DER4mj1x6qZ",
					error: "Próximamente: La ardilla asombrosamente amable",
					title: "Semana 1",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				}, {
					lecturaId: "j5oks6kgvOdiYqoTzcwT",
					title: "Semana 2",
					error: "Próximamente: ¿Qué es el teatro?",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "RGf9eeatZzXX0eFBIzMW",
					title: "Semana 3",
					error: "Próximamente: Fantasmaboy no es de un solo color",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
					activityMaterialDescarga: null,
					activityMaterialSugerencia: null,
					homeworkMateriales: null,
					homeworkMaterialDescarga: null,
					homeworkMaterialSugerencia: null,
				}
			],
			checked: false
		},
		{
			id: "mes4",
			textBtn: "4",
			textTitle: "Mes 4",
			fraceMotivacion: "Los libros son el avión, el tren y el camino. Son el destino y el viaje. Son el hogar.",
			autorfrace: "Anna Quindlen.",
			lecturas: [
				{
					lecturaId: "QilUFiMOQ1cZDaO89qR5",
					error: "Próximamente: Ricitos de oro",
					title: "Semana 1",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				}, {
					lecturaId: "bkJGRzWPmobXI8cBdkuP",
					title: "Semana 2",
					error: "Próximamente: Ratón de campo y de ciudad",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "x8hjLw5ocGjYd132y8pQ",
					title: "Semana 3",
					error: "Próximamente: DinoDan",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
					activityMaterialDescarga: null,
					activityMaterialSugerencia: null,
					homeworkMateriales: null,
					homeworkMaterialDescarga: null,
					homeworkMaterialSugerencia: null,
				}
			],
			checked: false
		},
		{
			id: "mes5",
			textBtn: "5",
			textTitle: "Mes 5",
			fraceMotivacion: "El que ama la lectura, tiene todo bajo su alcance.",
			autorfrace: "William Godwin.",
			lecturas: [
				{
					lecturaId: "QilUFiMOQ1cZDaO89qR5",
					error: "Próximamente: ¿Qué son los derechos de los niños y niñas?",
					title: "Semana 1",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				}, {
					lecturaId: "TXw12s73kJgSLkCeFwp0",
					title: "Semana 2",
					error: "Próximamente: El patito feo",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "IBLjA0cwhRdWpO1rQZoM",
					title: "Semana 3",
					error: "Próximamente: La crayola mágica",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
					activityMaterialDescarga: null,
					activityMaterialSugerencia: null,
					homeworkMateriales: null,
					homeworkMaterialDescarga: null,
					homeworkMaterialSugerencia: null,
				}
			],
			checked: false
		},
		{
			id: "mes6",
			textBtn: "6",
			textTitle: "Mes 6",
			fraceMotivacion: "Hay peores cosas que quemar libros, una de ellas es no leerlos.",
			autorfrace: "Ray Bradbury.",
			lecturas: [
				{
					lecturaId: "H3Ts3cmPqN3BIyf0nUUS",
					error: "Próximamente: Pelea de comida",
					title: "Semana 1",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				}, {
					lecturaId: "nPKn3BUdCPrNv2lXkLQi",
					title: "Semana 2",
					error: "Próximamente: El secreto de tus mascotas",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "BHjytU2Djpr1f0krX0ar",
					title: "Semana 3",
					error: "Próximamente: Ronnie, por favor y gracias",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
					activityMaterialDescarga: null,
					activityMaterialSugerencia: null,
					homeworkMateriales: null,
					homeworkMaterialDescarga: null,
					homeworkMaterialSugerencia: null,
				}
			],
			checked: false
		},
		{
			id: "mes7",
			textBtn: "7",
			textTitle: "Mes 7",
			fraceMotivacion: "Un buen libro no es aquel que piensa por ti, sino aquel que te hace pensar.",
			autorfrace: "James McCosh.",
			lecturas: [
				{
					lecturaId: "zrNzA6nnVE5AEZYE4yTJ",
					error: "Próximamente: El pequeño rey",
					title: "Semana 1",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				}, {
					lecturaId: "0yACBuIo6ormCO1Ee3Dn",
					title: "Semana 2",
					error: "Próximamente: El cuento que salvó al T-Rex",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "lxU7leQBvYHXK0uv073Q",
					title: "Semana 3",
					error: "Próximamente: Las mentiras de Gil",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
					activityMaterialDescarga: null,
					activityMaterialSugerencia: null,
					homeworkMateriales: null,
					homeworkMaterialDescarga: null,
					homeworkMaterialSugerencia: null,
				}
			],
			checked: false
		},
		{
			id: "mes8",
			textBtn: "8",
			textTitle: "Mes 8",
			fraceMotivacion: "Hay peores cosas que quemar libros, una de ellas es no leerlos.",
			autorfrace: "Ray Bradbury.",
			lecturas: [
				{
					lecturaId: "yqYFBTBJXyYcTfQAXinr",
					error: "Próximamente: Mitos: El origen de la lluvia",
					title: "Semana 1",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				}, {
					lecturaId: "px",
					title: "Semana 2",
					error: "Próximamente: Iguales o no iguales",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
					activityMateriales: null,
				},
				{
					lecturaId: "px",
					title: "Semana 3",
					error: "Próximamente: Los libros contra los gatos",
					preguntasInferencialesTitulo: "Preguntas Inferenciales",
					preguntasInferencialesRecomendacion: "Tener la portada a la mano en un dispositivo y realizar una lluvia de ideas sobre las respuestas de los estudiantes, con el objetivo de despertar pensamientos y emociones en grupo, aumentando así su interés y compromiso con la lectura.",
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
				<SeoHead title="Primaria 1"/>
				<ModuloInicio grado="Primaria 1"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Primaria 1" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
				<MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
