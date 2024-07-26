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
		{id: "izquierdo", text: "< Kinder 1 ", url: "/kinder1"},
		{id: "centro", text: "Otros grados", url: "/"},
		{id: "derecho", text: "Kinder 3 >", url: "/kinder3"},
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
                lecturaId: "l42iVpyDsRLXHAAFa9Ms",
                title: "Semana 1",
                error: "Próximamente: El abecedario en español",
                activityMateriales: "lápiz y papel",
            },
            {
                lecturaId: "KJcwDxcHDr6Z8SvblkWH",
                title: "Semana 3",
                error: "Próximamente: Planeta Alex",
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
                lecturaId: "CwfYpUV6lbKtSw8ZpC4a",
                title: "Semana 1",
                error: "Próximamente: Meses del año",
                activityMateriales: null,
            },
            {
                lecturaId: "Bv6PmGPjcPk7Yt0pT3jk",
                title: "Semana 3",
                error: "Próximamente: Thomas en busca de un hogar",
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
                lecturaId: "FbBJkFIPc8do8RSQLoxK",
                title: "Semana 1",
                error: "Próximamente: Colores del arcoiris",
                activityMateriales: null,
            },
            {
                lecturaId: "0CsZqkOpS6y0SenReZ3D",
                title: "Semana 3",
                error: "Próximamente: Giovanna galletas",
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
                lecturaId: "Wt4ASmk4ssDVfy9SmsjH",
                title: "Semana 1",
                error: "Próximamente: Profesiones",
                activityMateriales: null,
            },
            {
                lecturaId: "gEgyeYixqx2YAE9xh3XC",
                title: "Semana 3",
                error: "Próximamente: ¿Quién se ha llevado mi bolsa?",
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
                lecturaId: "Tby0z8nz8Xc5ZiesJHp5",
                title: "Semana 1",
                error: "Próximamente: Los días de la semana",
                activityMateriales: null,
            },
            {
                lecturaId: "vrzx5W6ZOTMHdIIKwe4h",
                title: "Semana 3",
                error: "Próximamente: GomaBum",
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
                lecturaId: "XJStnF4vBjwNpyjX5Lo0",
                title: "Semana 1",
                error: "Próximamente: Colores primarios",
                activityMateriales: null,
            },
            {
                lecturaId: "teIfdCLMQRvVnZaJDIvZ",
                title: "Semana 3",
                error: "Próximamente: Wicho el sucio",
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
                lecturaId: "K1gVrc1csFs3ixX9cOYs",
                title: "Semana 1",
                error: "Próximamente: Paisaje",
                activityMateriales: null,
            },
            {
                lecturaId: "kIdIBRFKuT6xtxcCQ4d8",
                title: "Semana 3",
                error: "Próximamente: Dulce Isaac",
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
                lecturaId: "iQnIeHJjRYgQKr0XMn7v",
                title: "Semana 1",
                error: "Próximamente: El desayuno de Mia",
                activityMateriales: null,
            },
            {
                lecturaId: "SQnsv8Rq7tQEppjnjWNQ",
                title: "Semana 3",
                error: "Próximamente: Bomtontun",
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
                lecturaId: "PrRtqzU7O3rCxvbeyozj",
                title: "Semana 1",
                error: "Próximamente: Susi, la hormiguita precavida",
                activityMateriales: null,
            },
            {
                lecturaId: "IFRvGd8ncWGX9zLg9FH9",
                title: "Semana 3",
                error: "Próximamente: El lápiz escritor",
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
                lecturaId: "BHjytU2Djpr1f0krX0ar",
                title: "Semana 1",
                error: "Próximamente: Ronie, cómo decir gracias y por favor",
                activityMateriales: null,
            },
            {
                lecturaId: "56pycXxmxeHXWTfT6agV",
                title: "Semana 3",
                error: "Próximamente: Coco y Nini",
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
				<SeoHead title="Kinder 2"/>
				<ModuloInicio grado="Kinder 2"/>
				<ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados}/>
				<ModuloPlanLector grado="Kinder 2" botonesPlanLector={botonesPlanLector} imagen="/assets/planlectorP1.png" hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw" textVideo="Ir a Video Explicativo"/>
				<ModuloObjetivos/>
				<ModuloMetodologia/>
                <MEI/>
				<ModuloImplementacionMensual meses={meses} preguntasInferenciales={preguntasInferenciales} recomendacionLectura={recomendacionLectura} lecturaProperties={lecturaProperties}/>
			</LayoutGrados>
		</>
	);
}
