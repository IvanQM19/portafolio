import React from 'react';
import pokedex from '../assets/pokedex.png';

const projects = [
  {
    image: pokedex, // Cambia a una imagen real del proyecto
    description: 'Proyecto Pokédex en React, se hace uso de la Poke-API.',
    repo: 'https://github.com/IvanQM19/Poke-dex'
  },
];

function JavaScript() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">JavaScript</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded shadow transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center items-center h-48 mb-4">
              <img src={project.image} alt={`Project ${index + 1}`} className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-lg mb-4">{project.description}</p>
            <a 
              href={project.repo} 
              className="bg-black text-white px-4 py-2 rounded hover:bg-blue-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JavaScript;
