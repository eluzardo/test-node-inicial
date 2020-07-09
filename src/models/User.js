const createTable = `CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    birthday TEXT NOT NULL,
    dni INTEGER UNIQUE
)`;

const insertData = `INSERT INTO  users (name, lastName, birthday, dni) 
    VALUES (?, ?, ?, ?
)`;


const updateData = `UPDATE users SET name = ?, lastName = ?, birthday = ?, dni = ? WHERE id= ? `;

const deleteData = `DELETE FROM users WHERE id = ?`;




module.exports = {
  createTable,
  insertData,
  updateData,
  deleteData,
};
