const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">✉️ Contáctanos</h1>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-2" htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-2" htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-2" htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
