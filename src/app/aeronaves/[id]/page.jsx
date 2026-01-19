
import Link from 'next/link';

export default async function DetalleAeronave({ params }) {
  
  const {id} = await params;
  const aeronaveId = parseInt(id);
  

 // Base de Datos estático (temporal)
  const aeronaves = [
    { id: 1, matricula: 'FAP-1101', modelo: 'A-29 Super Tucano', estado: 'Operativa', horas: 0 },
    { id: 2, matricula: 'FAP-1102', modelo: 'A-29 Super Tucano', estado: 'Operativa', horas: 0 },
    { id: 3, matricula: 'FAP-1103', modelo: 'A-29 Super Tucano', estado: 'Operativa', horas: 0 },
    { id: 4, matricula: 'FAP-1104', modelo: 'A-29 Super Tucano', estado: 'Operativa', horas: 0 },
    { id: 5, matricula: 'FAP-1105', modelo: 'A-29 Super Tucano', estado: 'Operativa', horas: 0 },
    { id: 6, matricula: 'FAP-1106', modelo: 'A-29 Super Tucano', estado: 'Operativa', horas: 0 }
  ];
  
  // 🆕 CONCEPTO: Buscar UN elemento en un array
  // Usamos .find() para encontrar la aeronave que coincida con el ID
  const aeronave = aeronaves.find((nave) => nave.id === aeronaveId);
  
  // 🤔 PENSÁ: ¿Qué pasa si no existe esa aeronave?
  // Ejemplo: usuario va a /aeronaves/999
  if (!aeronave) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="font-bold text-2xl text-red-600">
          Aeronave no encontrada
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      
      <Link 
        href="/aeronaves"
        className="text-blue-600 hover:text-blue-900 hover:underline transition-colors mb-6 inline-block"
      >
        ← Volver a la lista
      </Link>

      {/* ========== HEADER ========== */}
      <div className="mt-6 mb-12 ">
        <div className="flex justify-between items-center">
          
          {/* Título con matrícula */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {aeronave.matricula}
            </h1>
            <p className="text-xl text-gray-600">
              {aeronave.modelo}
            </p>
          </div>

          {/* Badge de estado */}
          <span className="rounded-md bg-green-200 text-green-800 text-sm font-semibold px-4 py-2">
            {aeronave.estado}
          </span>
          
        </div>
      </div>

      {/* ========== GRID DE INFORMACIÓN ========== */}
      {/* 🎯 TAREA: Crear un grid de 2 columnas con cards de información */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Card 1: Información General */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">
            📋 Información General
          </h2>
          
          {/* Lista de datos */}
          <div className="space-y-4 text-left">
            
            {/* Item: Matrícula */}
            <div className="flex justify-between">
              <span className="text-gray-600">Matrícula:</span>
              <span className="text-gray-800 font-semibold">{aeronave.matricula}</span>
            </div>

             {/* - Modelo */}
              <div className="flex justify-between">
              <span className="text-gray-600">Modelo:</span>
              <span className="text-gray-800 font-semibold">{aeronave.modelo}</span>
            </div>

            {/* - Estado */}
              <div className="flex justify-between">
              <span className="text-gray-600">Estado:</span>
              <span className="text-gray-800 font-semibold">{aeronave.estado}</span>
            </div>

            {/* - Horas de Vuelo */}
              <div className="flex justify-between">
              <span className="text-gray-600">Horas de vuelo:</span>
              <span className="text-gray-800 font-semibold">{aeronave.horas}h</span>
            </div>

          </div>
        </div>

        {/* Card 2: Estadísticas */}
        <div className="bg-white rounded-lg shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            📊 Estadísticas
          </h2>

            {/* 🎯 TAREA: Crear estadísticas inventadas */}
            {/* Por ejemplo: */}
            {/* - Total Misiones: 0 */}
            {/* - Último Mantenimiento: -- */}
            {/* - Próximo Mantenimiento: En 50h */}


            <div className="space-y-4 text-left">

                    <div className="flex justify-between">
                        <span className="text-gray-600">Total Misiones:</span>
                        <span className="text-gray-800 font-semibold">0</span>
                    </div>
                    
                    <div className="flex justify-between">
                        <span className="text-gray-600">Último Mantenimiento:</span>
                        <span className="text-gray-800 font-semibold">--</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Próximo Mantenimiento:</span>
                        <span className="text-gray-800 font-semibold">En 50hs</span>
                    </div>

            </div>{/*Listado de Acciones*/}
        </div> {/*Estadisticas*/}
      </div> {/*Container*/}

      {/* ========== BOTONES DE ACCIÓN ========== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-blue-200 text-blue-800 w-full hover:bg-blue-400 transition-colors rounded-lg px-6 py-3">
          📝 Registrar Mantenimiento
        </button>
        <button className="bg-green-200 text-green-800 w-full hover:bg-green-400 transition-colors rounded-lg px-6 py-3">
          ✈️ Registrar Vuelo
        </button>
        <button className="bg-gray-200 text-gray-800 w-full hover:bg-gray-400 transition-colors rounded-lg px-6 py-3">
          📄 Ver Historial
        </button>
      </div>

    </div>
  );
}