const path = require('node:path');
const fs = require('node:fs');
const sqlite3 = require('sqlite3').verbose();

const dataDir = path.join(__dirname);
const dbPath = path.join(dataDir, 'data.db');

// ensure file exists
if (!fs.existsSync(dbPath)){
  fs.closeSync(fs.openSync(dbPath, 'w'));
}

const db = new sqlite3.Database(dbPath);

db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL
  )`);
});

module.exports = db;
