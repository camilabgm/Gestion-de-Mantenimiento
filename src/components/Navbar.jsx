import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl">🛩️</span>
            <div>
              <h1 className="text-xl font-bold">SGMA</h1>
              <p className="text-xs text-blue-200">Fuerza Aérea Paraguaya</p>
            </div>
          </div>

          {/* Links de navegación */}
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="hover:text-blue-300 transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/aeronaves" 
              className="hover:text-blue-300 transition-colors"
            >
              Aeronaves
            </Link>
            <Link 
              href="/ordenes" 
              className="hover:text-blue-300 transition-colors"
            >
              Órdenes
            </Link>
            <Link 
              href="/inventario" 
              className="hover:text-blue-300 transition-colors"
            >
              Inventario
            </Link>
            <Link 
              href="/reportes" 
              className="hover:text-blue-300 transition-colors"
            >
              Reportes
            </Link>
             <Link 
              href="/prueba/spacing" 
              className="hover:text-blue-300 transition-colors"
            >
              Prueba Spacing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}