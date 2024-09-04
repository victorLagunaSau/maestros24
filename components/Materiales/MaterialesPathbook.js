import React from "react";
import { useQuery } from "@apollo/client";
import materialesPathbook from "../../graphql/materialespathbook";

const MaterialesPathbook = ({ pathbookId }) => {
    const { loading, error, data } = useQuery(materialesPathbook, {
        variables: { pathbook: pathbookId },
    });

    console.log(pathbookId)
    console.log(data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Si aún necesitas filtrar, puedes adaptar la condición aquí.
    const filteredResources = data.resources;

    return (
        <div className="bg-gray-100 p-8" id="materialesgrado">
            <h2 className="text-3xl font-semibold text-center mb-8">
                Materiales Descargables
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                    <div key={resource.id} className="card bg-white shadow-md rounded-lg p-4">
                        <img
                            src={resource.banner}
                            alt={resource.name}
                            className="w-full h-40 object-cover rounded-t-lg mb-4"
                        />
                        <div className="card-body">
                            <h3 className="text-xl font-semibold mb-2">{resource.name}</h3>
                            <p className="text-gray-700 mb-4">{resource.description}</p>
                            {resource.file && (
                                <a
                                    href={resource.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline py-2 px-5 sm:px-8 bg-white-100 border-red-500 text-red-500 hover:bg-red-200 hover:border-red-500 hover:text-red-500 transition-all hover:shadow-red-200"
                                >
                                    <img
                                        src="/assets/Icon/pdf.png"
                                        alt="Icono"
                                        className="inline mr-2"
                                    />
                                    Ver Documento
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MaterialesPathbook;
