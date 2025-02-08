import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Introduction.css'; // Nuevo archivo CSS

const Introduction: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">Introducción</h1>
      <p className="section-paragraph">
        El acceso a una educación inclusiva sigue siendo un reto en el Ecuador, especialmente para las
        personas con discapacidad visual. El aprendizaje y la práctica del sistema Braille son esenciales
        para su comunicación y autonomía. Sin embargo, se ven limitados por la falta de herramientas
        tecnológicas especializadas que les permitan desarrollar sus habilidades de manera más efectiva.
      </p>
      <p className="section-paragraph">
        AlphaBraille surge como una respuesta a esta problemática, brindando una solución innovadora que
        facilita el aprendizaje del alfabeto en el sistema Braille. Este dispositivo combina la interacción
        táctil con retroalimentación auditiva, lo que permite a los usuarios no solo reconocer caracteres,
        sino también desarrollar habilidades de escritura.
      </p>
      <p className="section-paragraph">
        En este apartado, exploraremos el contexto que dio origen al proyecto, los desafíos que enfrentan
        las personas con discapacidad visual en el acceso a la educación y cómo AlphaBraille busca superar
        estas barreras.
      </p>
      <div className="image-container">
        <img
          src="path/to/intro-image.jpg"
          alt="Imagen de un usuario interactuando con el dispositivo AlphaBraille"
          className="responsive-image"
        />
      </div>
      <div className="button-container">
        <Link to="/research" className="back-button">⬅ Volver a Investigación</Link>
      </div>
    </div>
  );
};

export default Introduction;
