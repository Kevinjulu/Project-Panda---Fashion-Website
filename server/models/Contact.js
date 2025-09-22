const db = require('../db');

function createContact({name,email,service,message}){
  return new Promise((resolve,reject)=>{
    const stmt = `INSERT INTO contacts(name,email,service,message,created_at) VALUES(?,?,?,?,datetime('now'))`;
    db.run(stmt, [name,email,service,message], function(err){
      if(err) return reject(err);
      resolve({ id:this.lastID, name,email,service,message });
    });
  });
}

function listContacts(){
  return new Promise((resolve,reject)=>{
    db.all(`SELECT * FROM contacts ORDER BY id DESC LIMIT 100`, [], (err, rows)=>{
      if(err) return reject(err);
      resolve(rows);
    });
  });
}

module.exports = { createContact, listContacts };
