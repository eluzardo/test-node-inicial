//Declaring user table model
const createTable = `CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    lastName VARCHAR NOT NULL,
    birthday TEXT NOT NULL,
    dni INTEGER UNIQUE
)`;

//Insert data query string
const insertData = function(){ 
  const query = `INSERT INTO  users (name, lastName, birthday, dni) VALUES (?, ?, ?, ?)`;
  return query;
}

//Update data query string
const updateData = function() {
  const query = `UPDATE users SET name = ?, lastName = ?, birthday = ?, dni = ? WHERE id= ? `;
  return query;
}

//Delete data query string
const deleteData = function(){
  let query = `DELETE FROM users WHERE id = ?`;
  return query;
}

//Search query string. In this case, all search parameters are passed as arguments to return the query string according to the search criteria.
const search = function(isBefore, isAfter, isBetween, date1, date2, string) {
  this.isBefore = isBefore;
  this.isAfter = isAfter;
  this.isBetween = isBetween;
  this.string = string;
  this.date1 = date1;
  this.date2 = date2;
  let query = `SELECT * FROM users WHERE (lastName LIKE '%${string}%' OR name LIKE '%${string}%') `;
  if (isBefore) {
    query += ` AND (birthday <= '${date1}') `;
  }
  if (isAfter) {
    query += ` AND (birthday >= '${date1}')`;
    console.log(query);
  }
  if (isBetween) {
    query += ` AND (birthday >= '${date1}'AND birthday <= '${date2}')`;
  }
  return query;
}

module.exports = {
  createTable,
  insertData,
  updateData,
  deleteData,
  search,
};
