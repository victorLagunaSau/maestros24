import { useQuery } from "@apollo/client";
import pathbookQuery from "../../graphql/pathbook.js";
import { motion } from "framer-motion";
import FichaPathbook from "../FichaPathbook/FichaPathbook";

const ModuloCardPathbook = ({ lectura, lecturaProperties }) => {
    const { loading, error, data } = useQuery(pathbookQuery, {
        variables: { pathbookId: lectura.lecturaId },
    });

    if (loading) return <p>Cargando...</p>;
    if (error) return (
        <div key={lectura.lecturaId} className="p-3">
            <div className="card card-compact w-45 bg-white-500 shadow-xl border-2 border-blue-100" key={lectura.lecturaId}>
                <div className="m-3">
                    <h2 className="card-title m-2 p-2">{lectura.title}</h2>
                    <p>{lectura.error}</p>
                </div>
            </div>
            <p className="text-xs text-gray-100">{error.message}</p>
        </div>
    );

    const pathbookData = data.pathbook;


const fichaLectura = {
			title: pathbookData.metadata[0]?.title ?? null,
			summary: pathbookData.metadata[0]?.summary ?? null,
			cover: pathbookData.metadata[0]?.cover ?? null,
			audiobook: pathbookData.audiobook ?? null,
			author: pathbookData.author?.name ?? null,
			theme: pathbookData.academicFile?.theme?.es ?? null,
			readingLevel: pathbookData.readingLevel?.level ?? null,
			readingLevelTxt: pathbookData.readingLevel?.es ?? null,
			qualities: pathbookData.qualities ?? null,
			readingTime: pathbookData.readingTime ?? null,
			mei: pathbookData.academicFile?.tag?.es ?? null,
			comprehension: pathbookData.academicFile?.comprehension ?? null,
			englishLevel: pathbookData.englishLevel ?? null,
			quiz: pathbookData.quiz ?? null,
			activities: pathbookData.academicFile?.activities ?? null,
			grades: pathbookData.grades ?? null,
			type: pathbookData.type ?? null,
			age: pathbookData.age ?? null,
			languages: pathbookData.languages ?? null,
			seasons: pathbookData.seasons ?? null,
			endings: pathbookData.endings ?? null,
			questionsBeforeReading: pathbookData.questionsBeforeReading ?? null,
			contentCount: pathbookData.contentCount ?? null,
			gradeFilter: pathbookData.gradeFilter ?? null,
			classification: pathbookData.classification ?? null,
			genres: pathbookData.genres ?? null,
		};


    return (
        <div key={lectura.lecturaId} className="p-3" >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById(lectura.lecturaId).showModal()}
                style={{ maxWidth: '350px' }}
            >
                <div className="card card-compact w-45 bg-white-500 shadow-xl border-2 border-blue-100 text-center" key={lectura.lecturaId}>
                    <div className="rounded-t-2xl bg-azulpathbooks">
                        <p className="right-2 top-2 card-title text-center text-white-100 text center m-4">{lectura.title}</p>
                    </div>
                    <figure>
                        {fichaLectura.cover && (
                            <img
                                src={fichaLectura.cover}
                                alt={`Portada de ${fichaLectura.title}`}
                                style={{ maxWidth: '100px', marginLeft: 'auto', marginRight: 'auto' }}
                                className="rounded shadow-2xl shadow-md shadow-gray-400 m-4"
                            />
                        )}
                    </figure>
                    <div className="card-body">
                        {fichaLectura.theme && (<p className="text-xs">{fichaLectura.theme}</p>)}
                        <div className="card-actions justify-center">
                            <button className="btn text-blue-800" onClick={() => document.getElementById(lectura.lecturaId).showModal()}>Ir a guía de uso</button>
                        </div>
                    </div>
                </div>
            </motion.div>

            <dialog id={lectura.lecturaId} className="modal" >
                    {fichaLectura ? (
                        <div >
                            <FichaPathbook fichaLectura={fichaLectura} lectura={lectura} lecturaProperties={lecturaProperties}/>
                        </div>
                    ) : (
                        <p>Lectura no disponible</p>
                    )}
            </dialog>
        </div>
    );
};

export default ModuloCardPathbook;

