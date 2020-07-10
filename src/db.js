const sqlite3 = require("sqlite3").verbose();
const {createTable} = require('./models/User')


//Connect to the DB. If not exists will be created
let db = new sqlite3.Database("User.db", (err) => {
  if (err) {
    console.log(err);
  } else console.log("DB access ok!");
});


//Create the User table imported from it's module if not exists
db.run(createTable, err =>{
    if(err){
        console.log('cant create table' + err)
    }else
        console.log('table created')
})


module.exports = db;
