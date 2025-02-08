import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Results.css'; // Nuevo archivo CSS

const Results: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">Resultados</h1>
      <p className="section-paragraph">
        Se llevaron a cabo pruebas piloto con usuarios de distintas edades y diferentes tiempos de uso.
        Los resultados indican que a mayor tiempo de uso del dispositivo, se logra una mayor cantidad de letras.
        Sin embargo, la efectividad del dispositivo puede variar según las características personales de cada usuario.
      </p>
      <table className="results-table">
        <thead>
          <tr>
            <th>Participante</th>
            <th>Edad</th>
            <th>Tiempo de uso (minutos)</th>
            <th>Progreso (letras logradas)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Participante 1</td>
            <td>19</td>
            <td>5</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Participante 2</td>
            <td>22</td>
            <td>3</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Participante 3</td>
            <td>32</td>
            <td>10</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
      <p className="section-paragraph">
        A continuación, se presenta una gráfica que ilustra el progreso de cada participante en función del
        tiempo de uso del dispositivo. La gráfica muestra que, aunque la mayoría de los participantes mejoraron,
        la efectividad puede ser inconsistente.
      </p>
      <img src="/src/assets/grafica.png" alt="Gráfica de radar de resultados" className="responsive-image" />

      <div className="button-container">
        <Link to="/research" className="back-button">⬅ Volver a Investigación</Link>
      </div>
    </div>
  );
};

export default Results;
