const config = require('../config/config.js');
const path = require('path');
const fs = require('fs');
const queryDatabase = require('../DB/db.config.js');

const migrationFilePath = path.resolve(__dirname, '001-create-tables.sql');
const migrationSQL = fs.readFileSync(migrationFilePath, 'utf8');




async function runMigration() {
  try {
    await queryDatabase(migrationSQL);
  } catch (error) {
    console.error('Error durante la migración:', error);
  }
}

runMigration();
