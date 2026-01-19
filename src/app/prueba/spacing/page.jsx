

export default function PruebaSpacing() {
  return (
    <div className="container mx-auto py-8">
      
      {/* PADDING COMPARACIÓN */}
      <h2 className="text-2xl font-bold mb-6">Comparación de Padding</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-blue-100 p-2 border border-blue-500">
          p-2 (8px) - Muy apretado
        </div>
        <div className="bg-blue-100 p-4 border border-blue-500">
          p-4 (16px) - Estándar ⭐
        </div>
        <div className="bg-blue-100 p-6 border border-blue-500">
          p-6 (24px) - Espacioso ⭐
        </div>
        <div className="bg-blue-100 p-8 border border-blue-500">
          p-8 (32px) - Muy espacioso
        </div>
      </div>

      {/* GAP COMPARACIÓN */}
      <h2 className="text-2xl font-bold mb-6">Comparación de Gap</h2>
      
      <h3 className="font-bold mb-2">gap-2 (8px)</h3>
      <div className="flex gap-2 mb-6">
        <div className="bg-red-500 text-white p-4">A</div>
        <div className="bg-red-500 text-white p-4">B</div>
        <div className="bg-red-500 text-white p-4">C</div>
      </div>

      <h3 className="font-bold mb-2">gap-4 (16px) ⭐</h3>
      <div className="flex gap-4 mb-6">
        <div className="bg-green-500 text-white p-4">A</div>
        <div className="bg-green-500 text-white p-4">B</div>
        <div className="bg-green-500 text-white p-4">C</div>
      </div>

      <h3 className="font-bold mb-2">gap-6 (24px) ⭐</h3>
      <div className="flex gap-6 mb-6">
        <div className="bg-blue-500 text-white p-4">A</div>
        <div className="bg-blue-500 text-white p-4">B</div>
        <div className="bg-blue-500 text-white p-4">C</div>
      </div>

      <h3 className="font-bold mb-2">gap-8 (32px)</h3>
      <div className="flex gap-8 mb-6">
        <div className="bg-purple-500 text-white p-4">A</div>
        <div className="bg-purple-500 text-white p-4">B</div>
        <div className="bg-purple-500 text-white p-4">C</div>
      </div>

      {/* GRID CON GAP */}
      <h2 className="text-2xl font-bold mb-6">Grid con diferentes gaps</h2>
      
      <h3 className="font-bold mb-2">Grid con gap-4</h3>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-yellow-400 p-4 text-center">1</div>
        <div className="bg-yellow-400 p-4 text-center">2</div>
        <div className="bg-yellow-400 p-4 text-center">3</div>
        <div className="bg-yellow-400 p-4 text-center">4</div>
        <div className="bg-yellow-400 p-4 text-center">5</div>
        <div className="bg-yellow-400 p-4 text-center">6</div>
      </div>

      <h3 className="font-bold mb-2">Grid con gap-8</h3>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-pink-400 p-4 text-center">1</div>
        <div className="bg-pink-400 p-4 text-center">2</div>
        <div className="bg-pink-400 p-4 text-center">3</div>
        <div className="bg-pink-400 p-4 text-center">4</div>
        <div className="bg-pink-400 p-4 text-center">5</div>
        <div className="bg-pink-400 p-4 text-center">6</div>
      </div>

    </div>
  );
}
