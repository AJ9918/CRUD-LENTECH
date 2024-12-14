import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgres://crud_nezg_user:ZjvlcXnm9O0GCzWlLPRxNvPpvnqFfiS9@dpg-ctevaadds78s73dl4kkg-a.Oregon-postgres.render.com:5432/crud_nezg',
  ssl: {
    rejectUnauthorized: false, // Render requiere conexiones SSL
  },
});

// Prueba de conexión
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error al conectar a la base de datos:', err.stack);
  }
  console.log('Conexión exitosa a PostgreSQL');
  release();
});

export default pool;
