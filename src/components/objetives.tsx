export default function Objectives() {
  return (
    <section className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
      <h2 className="text-3xl font-extrabold text-green-800 mb-4">🎯 Objetivos</h2>
      <h3 className="text-2xl font-semibold text-teal-700">Objetivo General</h3>
      <p className="text-gray-700 leading-relaxed">
        Implementar las actualizaciones identificadas al dispositivo AlphaBraille para el aprendizaje de la escritura del alfabeto Braille en ANVIZSUC.
      </p>
      <h3 className="text-2xl font-semibold text-teal-700 mt-4">Objetivos Específicos</h3>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Complementar el alfabeto Braille actual con signos diacríticos y de puntuación.</li>
        <li>Conectar el dispositivo a la nube para registrar errores y monitorear el progreso del usuario.</li>
        <li>Modificar la funcionalidad del signo generador para habilitar el modo de escritura.</li>
      </ul>
    </section>
  );
}