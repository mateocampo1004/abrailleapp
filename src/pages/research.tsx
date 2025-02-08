// src/pages/research.tsx

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/research.css';

const Research: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { title: 'Introducción', path: 'introduction', description: 'Conoce el contexto y los objetivos principales del proyecto AlphaBraille.' },
    { title: 'Metodología', path: 'methodology', description: 'Descubre los métodos y enfoques utilizados para el desarrollo del dispositivo.' },
    { title: 'Resultados', path: 'results', description: 'Explora los resultados obtenidos durante las pruebas de campo.' },
    { title: 'Conclusiones', path: 'conclusions', description: 'Revisa las conclusiones y aprendizajes clave del proyecto.' },
    { title: 'Referencias', path: 'references', description: 'Consulta las fuentes de información y estudios utilizados en la investigación.' }
  ];

  const handleCardClick = (path: string) => {
    setActiveSection(path);
  };

  return (
    <div className="research-container">
      <h1>Investigación de AlphaBraille</h1>
      <div className="research-intro">
        <p>
          AlphaBraille es un proyecto enfocado en la inclusión de personas con discapacidad visual,
          combinando tecnología e innovación para mejorar el aprendizaje del sistema braille.
        </p>
      </div>

      <div className="cards-container">
        {sections.map((section) => (
          <Link
            to={section.path}
            key={section.title}
            className="card"
            onClick={() => handleCardClick(section.path)}
          >
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </Link>
        ))}
      </div>

      <Outlet /> {/* Renderiza el contenido de las subrutas aquí */}

      {activeSection === null && (
  <div className="video-section">
    <h2>Conoce AlphaBraille en Acción</h2>
    <div className="video-wrapper">
      <video controls width="100%" height="auto">
        <source src="../src/assets/videoMain.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
    </div>
  </div>
)}

    </div>
  );
};

export default Research;
