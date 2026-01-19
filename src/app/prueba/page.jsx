export default function Prueba() {
  return (
    <div className="p-8 space-y-8">
      
      {/* EJEMPLO 1: justify-start */}
      <div>
        <h2 className="font-bold mb-2">justify-start (default)</h2>
        <div className="flex justify-start bg-gray-200 p-4">
          <div className="bg-blue-500 text-white p-4">A</div>
          <div className="bg-red-500 text-white p-4">B</div>
          <div className="bg-green-500 text-white p-4">C</div>
        </div>
      </div>

      {/* EJEMPLO 2: justify-center */}
      <div>
        <h2 className="font-bold mb-2">justify-center</h2>
        <div className="flex justify-center bg-gray-200 p-4">
          <div className="bg-blue-500 text-white p-4">A</div>
          <div className="bg-red-500 text-white p-4">B</div>
          <div className="bg-green-500 text-white p-4">C</div>
        </div>
      </div>

      {/* EJEMPLO 3: justify-end */}
      <div>
        <h2 className="font-bold mb-2">justify-end</h2>
        <div className="flex justify-end bg-gray-200 p-4">
          <div className="bg-blue-500 text-white p-4">A</div>
          <div className="bg-red-500 text-white p-4">B</div>
          <div className="bg-green-500 text-white p-4">C</div>
        </div>
      </div>

      {/* EJEMPLO 4: justify-between ⭐ */}
      <div>
        <h2 className="font-bold mb-2">justify-between (NAVBAR usa esto)</h2>
        <div className="flex justify-between bg-gray-200 p-4">
          <div className="bg-blue-500 text-white p-4">LOGO</div>
          <div className="bg-red-500 text-white p-4">MENÚ</div>
        </div>
      </div>

      {/* EJEMPLO 5: items-center + justify-between */}
      <div>
        <h2 className="font-bold mb-2">items-center + justify-between</h2>
        <div className="flex items-center justify-between bg-gray-200 p-4 h-32">
          <div className="bg-blue-500 text-white p-4">LOGO<br/>Más texto</div>
          <div className="bg-red-500 text-white p-4">MENÚ</div>
        </div>
      </div>

      {/* EJEMPLO 6: gap para espaciado */}
      <div>
        <h2 className="font-bold mb-2">gap-4 (espaciado entre elementos)</h2>
        <div className="flex gap-4 bg-gray-200 p-4">
          <div className="bg-blue-500 text-white p-4">A</div>
          <div className="bg-red-500 text-white p-4">B</div>
          <div className="bg-green-500 text-white p-4">C</div>
        </div>
      </div>

      {/* EJEMPLO 7: gap-8 (más espacio) */}
      <div>
        <h2 className="font-bold mb-2">gap-8 (más espaciado)</h2>
        <div className="flex gap-8 bg-gray-200 p-4">
          <div className="bg-blue-500 text-white p-4">A</div>
          <div className="bg-red-500 text-white p-4">B</div>
          <div className="bg-green-500 text-white p-4">C</div>
        </div>
      </div>

    </div>
  );
}