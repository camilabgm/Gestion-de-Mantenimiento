'use client'

import { useEffect, useState } from 'react'

export default function AeronavesPage() {
  const [aeronaves, setAeronaves] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Cargar aeronaves cuando se monta el componente
    fetch('/api/aeronaves')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setAeronaves(data.data)
        } else {
          setError(data.error)
        }
        setLoading(false)
      })
      .catch(err => {
        setError('Error al cargar aeronaves')
        setLoading(false)
        console.error(err)
      })
  }, [])

  // Función para determinar color según estado
  const getEstadoColor = (estado) => {
    if (estado === 'Operativa') return 'bg-green-100 text-green-800'
    if (estado === 'En Mantenimiento') return 'bg-yellow-100 text-yellow-800'
    return 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando aeronaves...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-bold text-lg mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Aeronaves de la Fuerza Aérea Paraguaya
          </h1>
          <p className="text-gray-600">
            Total de aeronaves: <span className="font-semibold">{aeronaves.length}</span>
          </p>
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Matrícula
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Modelo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Horas de Vuelo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Última Actualización
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {aeronaves.map((aeronave) => (
                  <tr key={aeronave.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {aeronave.matricula}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {aeronave.modelo}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getEstadoColor(aeronave.estado)}`}>
                        {aeronave.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {aeronave.horas.toLocaleString()} hrs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(aeronave.updatedAt).toLocaleDateString('es-PY')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-500">Operativas</div>
            <div className="mt-2 text-3xl font-bold text-green-600">
              {aeronaves.filter(a => a.estado === 'Operativa').length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-500">En Mantenimiento</div>
            <div className="mt-2 text-3xl font-bold text-yellow-600">
              {aeronaves.filter(a => a.estado === 'En Mantenimiento').length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-500">Total Horas de Vuelo</div>
            <div className="mt-2 text-3xl font-bold text-blue-600">
              {aeronaves.reduce((sum, a) => sum + a.horas, 0).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}