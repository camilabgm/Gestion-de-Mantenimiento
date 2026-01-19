import { Client } from 'pg'

export async function GET() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL
  })

  try {
    // Conectar a PostgreSQL
    await client.connect()

    // Obtener todas las aeronaves
    const result = await client.query(
      'SELECT * FROM "Aeronave" ORDER BY matricula ASC'
    )

    // Cerrar conexión
    await client.end()

    // Retornar como JSON
    return Response.json({
      success: true,
      data: result.rows,
      total: result.rows.length
    })
  } catch (error) {
    console.error('Error al obtener aeronaves:', error)
    
    // Intentar cerrar conexión si hubo error
    try {
      await client.end()
    } catch (e) {
      // Ignorar error de cierre
    }

    return Response.json(
      { 
        success: false, 
        error: 'Error al obtener aeronaves',
        message: error.message 
      },
      { status: 500 }
    )
  }
}