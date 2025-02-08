// src/pages/Home.tsx

import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>AlphaBraille</h1>
          <p>Revolucionando el aprendizaje del Braille con tecnología e inclusión.</p>
          <button 
            className="cta-button" 
            onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Descubre más sobre AlphaBraille"
          >
            Descubre AlphaBraille
          </button>
        </div>
      </header>

      {/* Impacto Social */}
      <section className="impact-section" id="impact">
        <h2>Impacto Social</h2>
        <p>AlphaBraille es más que un dispositivo. Es una herramienta para la autonomía, diseñada para transformar la vida de las personas con discapacidad visual.</p>
        <div className="impact-icons">
          <div aria-label="Accesibilidad">
            <img src="/assets/icon-accessibility.png" alt="Accesibilidad" />
            <p>Accesibilidad Total</p>
          </div>
          <div aria-label="Educación">
            <img src="/assets/icon-education.png" alt="Educación" />
            <p>Facilita el Aprendizaje</p>
          </div>
          <div aria-label="Inclusión">
            <img src="/assets/icon-inclusion.png" alt="Inclusión" />
            <p>Inclusión Social</p>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="features-section">
        <h2>Características Destacadas</h2>
        <ul>
          <li>✅ Interactividad táctil con respuesta auditiva.</li>
          <li>✅ Compatible con dispositivos móviles.</li>
          <li>✅ Diseño ergonómico para facilitar el aprendizaje inclusivo.</li>
        </ul>
      </section>

      {/* Galería de Pruebas */}
      <section className="gallery">
        <h2>Pruebas de Campo</h2>
        <div className="gallery-grid">
          <figure>
            <img src="/assets/field-test-1.jpg" alt="Prueba de campo 1" className="gallery-img"/>
            <figcaption>Sesión de prueba con estudiantes.</figcaption>
          </figure>
          <figure>
            <img src="/assets/field-test-2.jpg" alt="Prueba de campo 2" className="gallery-img"/>
            <figcaption>Interacción con el dispositivo en acción.</figcaption>
          </figure>
          <figure>
            <img src="/assets/field-test-3.jpg" alt="Prueba de campo 3" className="gallery-img"/>
            <figcaption>Feedback directo de los usuarios.</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Home;
