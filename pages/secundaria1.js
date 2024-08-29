import { useQuery } from "@apollo/client";
import planQuery from "../graphql/grados";
import ModuloInicio from "../components/InicioGrados";
import ModuloOtrosGrados from "../components/ModuloOtrosGrados";
import ModuloPlanLector from "../components/ModuloPlanLector";
import ModuloObjetivos from "../components/ObjetivosPathbook/Objetivos";
import ModuloMetodologia from "../components/ModuloMetodologia";
import ModuloImplementacionMensual from "../components/ImplementacionMensual/ModuloImplementacionMensual";
import LayoutGrados from "../components/Layout/LayoutGrados";
import SeoHead from "../components/SeoHead";
import MEI from "../components/MosaicoEducativo/MosaicoEducativo";
import MaterialesGrados from "../components/Materiales/MaterialesGrado";
import GradosEs from "../components/Arreglos/GradosEs";

export default function Home() {
    const grado = "G7"; // Este es el grado seleccionado
    const { loading, error, data } = useQuery(planQuery, {
        variables: { grade: grado },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Accediendo a los datos de GradosEs para el grado seleccionado
    const { nombre, botonesOtrosGrados, botonesPlanLector} = GradosEs[grado];

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
                recomendacion1: "Permitir que los estudiantes abran la lectura en un dispositivo y se les otorguen ",
                recomendacion2: " minutos para llegar a un final."
            },
            {
                titulo: "Lectura en casa:",
                recomendacion: "Encargar a cada estudiante que lea la historia de manera individual en casa. Esta actividad puede ser realizada como tarea personal o familiar, según lo decida el maestro."
            }
        ],
        activityMateriales: "lápiz y papel",
    };

    const { readingPlans } = data;

    const meses = readingPlans
        .filter(plan => plan.name.es.toLowerCase().includes("mes "))
        .map((plan) => {
            const textBtn = plan.name.es.replace(/^mes\s+/i, '');
            return {
                id: plan.id,
                textBtn: textBtn,
                textTitle: plan.name.es,
                fraceMotivacion: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
                autorfrace: "Nelson Mandela.",
                lecturas: plan.pathbooks.map((book, bookIndex) => ({
                    lecturaId: book.id,
                    title: `Semana ${bookIndex + 1}`,
                    error: book.quiz ? 'Contenido completo' : 'Próximamente',
                })),
                checked: true,
            };
        });

    meses.sort((a, b) => {
        if (a.textBtn < b.textBtn) return -1;
        if (a.textBtn > b.textBtn) return 1;
        return 0;
    });

    return (
        <>
            <LayoutGrados>
                <SeoHead title={nombre} />
                <ModuloInicio grado={nombre} />
                <ModuloOtrosGrados botonesOtrosGrados={botonesOtrosGrados} />
                <ModuloPlanLector
                    grado={nombre}
                    botonesPlanLector={botonesPlanLector}
                    imagen="/assets/planlectorP1.png"
                    hrefVideo="https://www.youtube.com/watch?v=SVDATXnwXEw"
                    textVideo="Ir a Video Explicativo"
                />
                <ModuloObjetivos />
                <ModuloMetodologia />
                <MEI />
                <ModuloImplementacionMensual
                    meses={meses}
                    recomendacionLectura={lecturaProperties.recomendacionLectura}
                    lecturaProperties={lecturaProperties}
                />
                <MaterialesGrados grado={grado}/>
            </LayoutGrados>
        </>
    );
}
