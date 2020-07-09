const sqlite3 = require("sqlite3").verbose();
const {createTable} = require('./models/User')

let db = new sqlite3.Database("User.db", (err) => {
  if (err) {
    console.log(err);
  } else console.log("DB access ok!");
});

db.run(createTable, err =>{
    if(err){
        console.log('cant create table' + err)
    }else
        console.log('table created')
})


module.exports = db;
