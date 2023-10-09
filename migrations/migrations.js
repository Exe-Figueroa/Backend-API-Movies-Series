const config = require('../config/config.js');
const path = require('path');
const { Client } = require('pg');
const fs = require('fs');

const migrationFilePath = path.resolve(__dirname, '001-create-tables.sql');
const migrationSQL = fs.readFileSync(migrationFilePath, 'utf8');

const client = new Client({
  user: config.username,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.dbPort,
  ssl: false
});

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

runMigration();
