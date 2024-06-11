import React from 'react';
import { useParams } from 'react-router-dom';

const languages = {
  javascript: { name: 'JavaScript', image: 'path-to-javascript-image.jpg', description: 'Trabajo en JavaScript' },
  python: { name: 'Python', image: 'path-to-python-image.jpg', description: 'Trabajo en Python' },
  // Añade más lenguajes según necesites
};

function Lenguaje() {
  const { lenguaje } = useParams();
  const lang = languages[lenguaje];

  if (!lang) {
    return <div>Lenguaje no encontrado</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{lang.name}</h1>
      <img src={lang.image} alt={lang.name} className="w-full h-48 object-cover mb-4 rounded" />
      <p>{lang.description}</p>
    </div>
  );
}

export default Lenguaje;
