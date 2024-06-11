import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacto() {
  const whatsappNumber = '525534422278'; // Reemplaza esto con tu número de teléfono en formato internacional sin símbolos (+52 para México)
  const githubUrl = 'https://github.com/IvanQM19'; // Reemplaza esto con tu URL de GitHub
  const linkedinUrl = 'https://www.linkedin.com/in/jos%C3%A9-iv%C3%A1n-quijas-miranda-81647b272/'; // Reemplaza esto con tu URL de LinkedIn

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Contacto</h1>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-2xl mr-4" />
          <p className="text-lg">ivanqm@outlook.es</p>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-2xl mr-4" />
          <p className="text-lg">+52 55-34-42-22-78</p>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-2xl mr-4" />
          <a href={`https://wa.me/${whatsappNumber}`} className="text-lg text-blue-900 hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-2xl mr-4" />
          <a href={githubUrl} className="text-lg text-blue-900 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl mr-4" />
          <a href={linkedinUrl} className="text-lg text-blue-900 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        {/* Agrega más información de contacto según necesites */}
      </div>
    </div>
  );
}

export default Contacto;



