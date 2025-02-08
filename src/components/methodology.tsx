import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Methodology.css'; // Nuevo archivo CSS
import MethodologyDiagram from '../assets/methodology-diagram.png'; // Ruta al gráfico SVG

const Methodology: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">Metodología</h1>
      <p className="section-paragraph">
        La investigación se llevó a cabo utilizando la metodología <strong>Design Thinking</strong>, un enfoque centrado en el usuario que promueve la innovación a través de la comprensión profunda de las necesidades y desafíos de los usuarios finales. Esta metodología consta de varias fases que permiten iterar y mejorar continuamente el diseño del producto.
      </p>
      
      <h2 className="subsection-title">Fases de la Metodología</h2>
      <img src={MethodologyDiagram} alt="Diagrama de las fases de Design Thinking" className="methodology-diagram" />
      
      <table className="methodology-table">
        <thead>
          <tr>
            <th>Fase</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empatizar</td>
            <td>Realización de entrevistas y talleres con miembros de la Asociación de No Videntes de la Zona Sur del Cañar (ANVIZSUC) para comprender las dificultades en el aprendizaje del Braille.</td>
          </tr>
          <tr>
            <td>Definir</td>
            <td>Identificación de las necesidades clave de los usuarios y establecimiento de objetivos claros para el desarrollo de AlphaBraille.</td>
          </tr>
          <tr>
            <td>Idear</td>
            <td>Sesiones de brainstorming para generar ideas innovadoras que aborden los problemas definidos.</td>
          </tr>
          <tr>
            <td>Prototipar</td>
            <td>Desarrollo de prototipos de bajo costo del dispositivo AlphaBraille, permitiendo ajustes rápidos basados en la retroalimentación de los usuarios.</td>
          </tr>
          <tr>
            <td>Evaluar</td>
            <td>Pruebas con usuarios reales para evaluar la efectividad del dispositivo y recopilar datos sobre el rendimiento y la satisfacción del usuario.</td>
          </tr>
        </tbody>
      </table>

      <h2 className="subsection-title">Resultados de la Metodología</h2>
      <p className="section-paragraph">
        La implementación de la metodología Design Thinking ha permitido un enfoque iterativo que asegura que el dispositivo final responda a las necesidades reales de los usuarios. Los resultados obtenidos durante las pruebas iniciales indican que AlphaBraille no solo es efectivo en la enseñanza del Braille, sino que también aumenta la motivación de los usuarios al aprender.
      </p>
      <div className="button-container">
        <Link to="/research" className="back-button">⬅ Volver a Investigación</Link>
      </div>
    </div>
  );
};

export default Methodology;
