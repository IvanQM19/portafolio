import React from 'react';
import { Link } from 'react-router-dom';
import pythonLogo from '../assets/pythonLogo.png';
import reactLogo from '../assets/reactLogo.png';
import javascriptLogo from '../assets/javascript_Logo.png';
import shLogo from '../assets/shLogo.png';
import myPhoto from '../assets/yoO.jpg'; // Asegúrate de cambiar esto al nombre de tu foto

const languages = [
  { name: 'Python', image: pythonLogo, description: 'Trabajo en Python' },
  { name: 'JavaScript', image: javascriptLogo, description: 'Trabajo en JavaScript' },
  { name: 'React', image: reactLogo, description: 'Trabajo en React' },
  { name: 'Shell', image: shLogo, description: 'Trabajo en Shell' },
  // Añade más lenguajes según necesites
];

function Inicio() {
  return (
    <div className="p-4">
      <div className="flex items-center mb-8">
        <img 
          src={myPhoto} 
          alt="My Photo" 
          className="w-40 h-40 rounded-full mr-6 transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <div>
          <h1 className="text-2xl font-bold">
            ¡Hola!, soy <span className='resaltar'>José Iván Quijas Miranda</span>
          </h1>
          <p className="text-lg">
            Soy ingeniero en <span className='resaltar'>sistemas computacionales</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {languages.map(lang => (
          <div key={lang.name} className="border p-4 rounded shadow transition-transform transform hover:scale-105 hover:shadow-lg">
            <Link to={`/lenguaje/${lang.name.toLowerCase()}`}>
              <div className="flex justify-center items-center h-48 mb-4">
                <img src={lang.image} alt={lang.name} className="max-h-full max-w-full object-contain" />
              </div>
              <h2 className="text-xl font-bold">{lang.name}</h2>
              <p>{lang.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;






