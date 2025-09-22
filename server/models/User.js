const db = require('../db');
const bcrypt = require('bcryptjs');

// Create users table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at TEXT NOT NULL,
    last_login TEXT
  )`);
  
  // Create default admin user if no users exist
  db.get('SELECT COUNT(*) as count FROM users', [], async (err, row) => {
    if (err) {
      console.error('Error checking users:', err);
      return;
    }
    
    if (row.count === 0) {
      console.log('Creating default admin user...');
      const hashedPassword = await bcrypt.hash('admin123', 12);
      db.run(
        'INSERT INTO users (username, email, password_hash, role, created_at) VALUES (?, ?, ?, ?, ?)',
        ['admin', 'admin@neonkenya.com', hashedPassword, 'admin', new Date().toISOString()],
        function(err) {
          if (err) {
            console.error('Error creating admin user:', err);
          } else {
            console.log('Default admin user created - username: admin, password: admin123');
            console.log('⚠️  Please change the default password in production!');
          }
        }
      );
    }
  });
});

function createUser({ username, email, password, role = 'user' }) {
  return new Promise(async (resolve, reject) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const stmt = `INSERT INTO users(username, email, password_hash, role, created_at) 
                    VALUES(?, ?, ?, ?, ?)`;
      
      db.run(stmt, [username, email, hashedPassword, role, new Date().toISOString()], function(err) {
        if (err) return reject(err);
        resolve({ 
          id: this.lastID, 
          username, 
          email, 
          role,
          created_at: new Date().toISOString()
        });
      });
    } catch (err) {
      reject(err);
    }
  });
}

function findUserByUsername(username) {
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT * FROM users WHERE username = ?', 
      [username], 
      (err, row) => {
        if (err) return reject(err);
        resolve(row);
      }
    );
  });
}

function findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT * FROM users WHERE email = ?', 
      [email], 
      (err, row) => {
        if (err) return reject(err);
        resolve(row);
      }
    );
  });
}

function updateLastLogin(userId) {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE users SET last_login = ? WHERE id = ?',
      [new Date().toISOString(), userId],
      (err) => {
        if (err) return reject(err);
        resolve();
      }
    );
  });
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = {
  createUser,
  findUserByUsername,
  findUserByEmail,
  updateLastLogin,
  validatePassword
};