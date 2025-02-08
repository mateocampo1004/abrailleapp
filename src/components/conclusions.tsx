import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Conclusions.css'; // Nuevo archivo CSS

const Conclusions: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">Conclusiones</h1>
      <p className="section-paragraph">
        A través de este proyecto, se logró identificar la necesidad de usar el microcontrolador ESP32 como
        una solución viable para la realización del dispositivo. El uso de este microcontrolador permite
        una mayor flexibilidad y funcionalidad en el dispositivo AlphaBraille, facilitando su integración
        con diversas tecnologías y mejorando su rendimiento.
      </p>
      <p className="section-paragraph">
        Se considera que el dispositivo electrónico denominado AlphaBraille es un buen recurso para iniciar
        de manera divertida y accesible el aprendizaje del abecedario en Braille. La combinación de la
        interacción táctil y la retroalimentación auditiva ha demostrado ser efectiva en las pruebas realizadas,
        brindando una experiencia de aprendizaje más inclusiva.
      </p>
      <div className="image-container">
        <img 
          src="path/to/conclusion-image.jpg" 
          alt="Imagen de un usuario satisfecho utilizando AlphaBraille" 
          className="responsive-image" 
        />
      </div>
      <div className="button-container">
        <Link to="/research" className="back-button">⬅ Volver a Investigación</Link>
      </div>
    </div>
  );
};

export default Conclusions;
