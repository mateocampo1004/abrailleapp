// src/components/ResearchSummary.jsx
export default function ResearchSummary() {
  return (
    <section className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-4">📋 Resumen</h2>
      <p className="text-gray-700 leading-relaxed">
        El proyecto <strong>AlphaBraille</strong> desarrolla un dispositivo electrónico que ayuda a personas con discapacidad visual a aprender el alfabeto Braille. Combina interacción táctil con retroalimentación auditiva para facilitar el aprendizaje. Las pruebas piloto con usuarios de distintas edades muestran que es efectivo para el aprendizaje inicial del Braille, aunque su eficiencia varía entre usuarios.
      </p>
    </section>
  );
}