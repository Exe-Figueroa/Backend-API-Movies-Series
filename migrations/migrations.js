const { config } = require('../config/config.js');
const { Client } = require('pg');
const fs = require('fs');

// Lee el contenido del archivo de migración SQL
const migrationSQL = fs.readFileSync('001-create-tables.sql', 'utf8');

// Configuración de conexión a la base de datos
const client = new Client({
  user: config.username,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.dbPort,
});

// Función para ejecutar la migración
async function runMigration() {
  try {
    await client.connect();
    await client.query(migrationSQL);
    console.log('Migración exitosa');
  } catch (error) {
    console.error('Error durante la migración:', error);
  } finally {
    await client.end();
  }
}

// Ejecuta la migración
runMigration();
