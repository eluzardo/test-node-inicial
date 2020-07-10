//import queries string from User model
const {
  insertData,
  updateData,
  deleteData,
  search,
} = require("../models/User");
const db = require("../db");
//const { query } = require("express");
const userController = {};

//all the CRUD queries statements are requested from the user model to be sent to the DB

//Insertdata: client fills all the fields in the request, then this values are stored in an array and pass to the DB as a paremeter with the query string from the User model

userController.insertData = (req, res) => {
  const newUser = [
    req.body.name,
    req.body.lastName,
    req.body.birthday,
    req.body.dni,
  ];
  const query = insertData();
  //DB query
  db.run(query, newUser, (err) => {
    if (err) {
      console.log("Can't add user" + err);
      res.status(500).send({ message: "Can't insert. Error: " + err });
    } else console.log("User added!");
  });
  res.send(newUser);
};

//Updatedata: client fills all the fields to be updated in the request, then this values are stored in an array and passed to the DB as a paremeter with the query string from the User model

userController.updateData = (req, res) => {
  const update = [
    req.body.name,
    req.body.lastName,
    req.body.birthday,
    req.body.dni,
    req.params.id,
  ];
  const query = updateData();
  //DB query
  db.run(query, update, (err) => {
    if (err) {
      console.log("Can't update" + err);
      res.status(500).send({ message: "Can't update. Error: " + err });
    } else console.log("user updated!");
  });
  res.send("User updated");
};

//Deletedata: client select an user by id and this parameter is passed by the url, then this value is passed as a paremeter to the DB with the query string imported from the User model

userController.deleteData = (req, res) => {
  const { id } = req.params;
  const query = deleteData();
  //DB query
  db.run(query, id, (err) => {
    if (err) {
      console.log("Can't delete" + err);
      res.status(500).send({ message: "Can't delete. Error: " + err });
    } else console.log("User deleted!");
  });
  res.send("User deleted");
};

//client can choose option1 for search a birthday after the given date, option2 before and option3 between two dates.
//If the option is set to another value it won't search by date.
//String value is used for search an user by it's name or lastname.
//Both searchs can be mixed.
//All these values are passed as arguments to the search function in User model wich returns a query string that is passed to the DB

userController.search = (req, res) => {
  const { option, string } = req.body;
  let { date1, date2 } = req.body;
  let isAfter = false,
    isBefore = false,
    isBetween = false;
  auxDate = "";

  if (option === 1) {
    isAfter = true;
  }
  if (option === 2) {
    isBefore = true;
  }
  if (option === 3) {
    isBetween = true;
    //in case date1 is greater than date2 this values are inverted so that the querie can be succesfull
    if (date1 > date2) {
      auxDate = date1;
      date1 = date2;
      date2 = auxDate;
    }
  }
  //In this case, the search parameters are sent to the function so it can return the correct query string acording if the search combines dates and string.
  //The request to the DB has only 1 argument due that the search function returns the complete query string.
  const query = search(isBefore, isAfter, isBetween, date1, date2, string);
  //DB query
  db.all(query, (err, result) => {
    if (err) {
      console.log("error:" + err);
      res.status(500).send({ message: "Can't search. Error: " + err });
    } else {
      console.log("Search done!");
      res.send(result);
    }
  });
};

module.exports = userController;
