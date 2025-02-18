import React from "react";
import '../styles/team.css';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center transition-transform hover:scale-105">
        👥 Nuestro Equipo
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Miembro 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-3">
          <img 
            src="src/assets/a2.jpg"
            alt="Gabriel Mateo Campo Guerrero"
            className="w-full h-48 object-cover rounded-t-xl transition-transform hover:scale-105"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Gabriel Mateo Campo Guerrero</h2>
          <p className="text-gray-600">gmcampo@sudamericano.edu.ec</p>
          <p className="mt-2 text-gray-700">
            Gabriel es un desarrollador apasionado que se involucra en proyectos innovadores para mejorar la educación.
          </p>
        </div>
        {/* Miembro 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-3">
          <img 
            src="ruta/a/imagen-jose.jpg" // Reemplaza con la ruta correcta de la imagen
            alt="José Antonio Vera Montes"
            className="w-full h-48 object-cover rounded-t-xl transition-transform hover:scale-105"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">José Antonio Vera Montes</h2>
          <p className="text-gray-600">javera@sudamericano.edu.ec</p>
          <p className="mt-2 text-gray-700">
            José es un experto en gestión de proyectos, siempre buscando la mejor manera de optimizar recursos.
          </p>
        </div>
        {/* Miembro 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-3">
          <img 
            src="ruta/a/imagen-manuel.jpg" // Reemplaza con la ruta correcta de la imagen
            alt="Manuel Rubén Villa Guillermo"
            className="w-full h-48 object-cover rounded-t-xl transition-transform hover:scale-105"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Manuel Rubén Villa Guillermo</h2>
          <p className="text-gray-600">mrvilla.2@sudamericano.edu.ec</p>
          <p className="mt-2 text-gray-700">
            Manuel aporta su experiencia en desarrollo de software, enfocándose en soluciones escalables.
          </p>
        </div>
      </div>

      {/* Imagen Grande del Equipo */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Compromiso</h2>
        <img 
          src="../src/assets/img_team.jpeg" // Reemplaza con la ruta correcta de tu imagen
          alt="Equipo trabajando juntos"
          className="max-w-full h-auto rounded-xl shadow-lg transition-transform hover:scale-105"
        />
        <p className="mt-4 text-gray-600">
          Juntos, trabajamos para crear un futuro mejor a través de la innovación y la colaboración.
        </p>
      </div>
    </div>
  );
};

export default Team;
