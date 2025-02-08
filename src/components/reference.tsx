import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/References.css'; // Nuevo archivo CSS

const References: React.FC = () => {
  return (
    <div className="section-container">
      <h1 className="section-title">Referencias</h1>
      <ul className="reference-list">
        <li>Caytuiro Silva, N. E., & Peña Alejandro, J. M. (2024). Desarrollo de un dispositivo de asistencia ergonómico y de bajo costo para reconocimiento de billetes basado en visión artificial e IoT para personas con discapacidad visual en la ciudad de Arequipa.</li>
        <li>Condarco Calderón, Y. (2023). Dispositivo electrónico para apoyar el aprendizaje inicial de lectura Braille. <em>Journal Boliviano de Ciencias</em>, 19(54), 61–76.</li>
        <li>Espinoza, J. S., Zaragocín, W. C., & León, M. E. (2022). Aprendizaje del sistema de lectura y escritura Braille basado en las TIC. <em>CEDAMAZ</em>, 12(1), 77–84.</li>
        <li>Rangel, A. C. A. (2021). Producción de recursos auditivos en la enseñanza a estudiantes con discapacidad visual. <em>Edutec, Revista Electrónica de Tecnología Educativa</em>, 77, 70–86.</li>
        <li>Rubio, B. C. L., Valdez, L. F. R., Mendoza, K. Z., Orozco, A. A. E., & Amador, L. A. D. (2024). Catabraille: Dispositivo pedagógico para la enseñanza del sistema Braille. <em>Tecnología Educativa Revista CONAIC</em>, 11(2), 49–55.</li>
        <li>González, M. A., & Torres, F. J. (2023). Integración de tecnologías de asistencia en la educación inclusiva. <em>Revista de Educación Inclusiva</em>, 5(3), 45–60.</li>
        <li>Martínez, L. R., & Díaz, P. (2022). Evaluación de dispositivos tecnológicos para el aprendizaje Braille. <em>Revista de Tecnología Educativa</em>, 10(1), 12–25.</li>
      </ul>
      <div className="button-container">
        <Link to="/research" className="back-button">⬅ Volver a Investigación</Link>
      </div>
    </div>
  );
};

export default References;
