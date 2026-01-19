// ============================================
// DASHBOARD - Página Principal del Sistema
// Ruta: http://localhost:3001/
// ============================================

export default function Dashboard() {
  return (
    // CONTENEDOR PRINCIPAL
    // - container: Limita ancho máximo (no ocupa toda la pantalla en monitores grandes)
    // - mx-auto: Centra horizontalmente
    // - px-4: Padding horizontal (espacio a los lados)
    // - py-8: Padding vertical (espacio arriba/abajo)
    <div className="container mx-auto px-4 py-8">
      
      {/* ==================== HEADER ==================== */}
      {/* mb-8 = margin-bottom para separar del contenido siguiente */}
      <div className="mb-8">
        {/* TÍTULO PRINCIPAL */}
        {/* - text-3xl: Texto extra grande (3 veces el tamaño base) */}
        {/* - font-bold: Negrita */}
        {/* - text-gray-800: Gris oscuro (legible pero no negro puro) */}
        {/* - mb-2: Pequeño espacio debajo del título */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Dashboard de Operaciones
        </h1>
        
        {/* SUBTÍTULO */}
        {/* - text-gray-600: Gris medio (más claro que el título = jerarquía visual) */}
        <p className="text-gray-600">
          Vista general del estado de la flota
        </p>
      </div>

      {/* ==================== GRID DE CARDS ==================== */}
      {/* SISTEMA GRID RESPONSIVE:
          - grid: Activa el sistema de cuadrícula
          - grid-cols-1: Por defecto (móvil) = 1 columna (cards apilados)
          - md:grid-cols-2: Desde tablet = 2 columnas
          - lg:grid-cols-4: Desde desktop = 4 columnas (todos en fila)
          - gap-6: Espacio entre cards (24px)
          - mb-8: Margen debajo de toda la sección */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        {/* ========== CARD 1: TOTAL DE AERONAVES ========== */}
        {/* ESTRUCTURA DEL CARD:
            - bg-white: Fondo blanco (contrasta con el fondo gris del main)
            - rounded-lg: Esquinas redondeadas grandes
            - shadow-md: Sombra mediana (efecto de elevación/profundidad)
            - p-6: Padding interno (24px) - espacio entre borde y contenido
            - border-l-4: Borde IZQUIERDO de 4px de grosor
            - border-blue-500: Color del borde = azul (identificador visual) */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          
          {/* CONTENIDO DEL CARD:
              - flex: Activar flexbox
              - items-center: Alinear verticalmente al centro
              - justify-between: Distribuir espacio (texto izquierda, emoji derecha) */}
          <div className="flex items-center justify-between">
            
            {/* TEXTO DEL CARD */}
            <div>
              {/* ETIQUETA (pequeña, secundaria) */}
              {/* - text-gray-500: Gris medio (menos importante que el valor) */}
              {/* - text-sm: Texto pequeño */}
              {/* - font-medium: Peso medio (entre normal y bold) */}
              <p className="text-gray-500 text-sm font-medium">Total Aeronaves</p>
              
              {/* VALOR (grande, destacado) */}
              {/* - text-3xl: Extra grande (el número debe destacar) */}
              {/* - font-bold: Negrita (máxima importancia) */}
              {/* - text-gray-800: Gris oscuro (contraste alto) */}
              <p className="text-3xl font-bold text-gray-800">6</p>
            </div>
            
            {/* EMOJI DECORATIVO */}
            {/* - text-4xl: Extra grande para que se vea bien */}
            <div className="text-4xl">🛩️</div>
          </div>
        </div>

        {/* ========== CARD 2: OPERATIVAS ========== */}
        {/* Exactamente igual al Card 1, SOLO cambian: */}
        {/* - border-green-500: Borde verde (estado positivo) */}
        {/* - Texto: "Operativas" */}
        {/* - Emoji: ✅ (check = OK) */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Operativas</p>
              <p className="text-3xl font-bold text-gray-800">6</p>
            </div>
            <div className="text-4xl">✅</div>
          </div>
        </div>

        {/* ========== CARD 3: EN MANTENIMIENTO ========== */}
        {/* - border-yellow-500: Borde amarillo (advertencia/precaución) */}
        {/* - Emoji: 🔧 (herramienta = mantenimiento) */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">En Mantenimiento</p>
              <p className="text-3xl font-bold text-gray-800">0</p>
            </div>
            <div className="text-4xl">🔧</div>
          </div>
        </div>

        {/* ========== CARD 4: ALERTAS ACTIVAS ========== */}
        {/* - border-red-500: Borde rojo (peligro/urgente) */}
        {/* - Emoji: ⚠️ (alerta) */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Alertas Activas</p>
              <p className="text-3xl font-bold text-gray-800">0</p>
            </div>
            <div className="text-4xl">⚠️</div>
          </div>
        </div>
      </div>

      {/* ==================== SECCIÓN DE ACCIONES RÁPIDAS ==================== */}
      {/* Card grande que contiene botones */}
      {/* - Mismas clases que los cards pequeños pero sin borde lateral */}
      <div className="bg-white rounded-lg shadow-md p-6">
        
        {/* TÍTULO DE LA SECCIÓN */}
        {/* - text-xl: Grande (pero más chico que el H1 del header) */}
        {/* - mb-4: Espacio debajo del título */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Acciones Rápidas
        </h2>
        
        {/* GRID DE BOTONES RESPONSIVE:
            - grid-cols-1: Móvil = botones apilados
            - md:grid-cols-3: Tablet+ = 3 botones en fila
            - gap-4: Espacio entre botones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* ========== BOTÓN 1: NUEVA ORDEN ========== */}
          {/* CLASES DEL BOTÓN:
              - bg-blue-600: Fondo azul oscuro
              - text-white: Texto blanco (contraste con fondo oscuro)
              - px-6: Padding horizontal (hace el botón más ancho/clickeable)
              - py-3: Padding vertical (hace el botón más alto)
              - rounded-lg: Esquinas redondeadas
              - hover:bg-blue-700: Al pasar mouse = azul MÁS oscuro (feedback visual)
              - transition-colors: Anima el cambio de color suavemente */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            + Nueva Orden de Trabajo
          </button>
          
      
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Registrar Mantenimiento
          </button>
          
       
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Ver Reportes
          </button>
        </div>
      </div>
      
    </div> 
  );
}
