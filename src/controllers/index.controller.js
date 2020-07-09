const { insertData, updateData, deleteData } = require("../models/User");
const db = require("../db");
const { param } = require("../routes/index.routes");
const userController = {};

userController.insertData = (req, res) => {
  console.log(req.body.name);
  const newUser = [
    req.body.name,
    req.body.lastName,
    req.body.birthday,
    req.body.dni,
  ];
  db.run(insertData, newUser, (err) => {
    if (err) {
      console.log("no se pudieron ingresar los datos" + err);
    } else console.log("datos insertados");
  });
  res.send(newUser);
};

userController.updateData = (req, res) => {
  const update = [
    req.body.name,
    req.body.lastName,
    req.body.birthday,
    req.body.dni,
    req.params.id,
  ];
  db.run(updateData, update, (err) => {
    if (err) {
      console.log("no se pudo actualizar" + err);
    } else console.log("user updated");
  });
  res.send("User updated");
};

userController.deleteData = (req, res) => {
  const del = req.params.id;
  db.run(deleteData, del, (err) => {
    if (err) {
      console.log("no se pudo eliminar" + err);
    } else console.log("eliminado");
  });
  res.send("User deleted");
};



userController.selectByDate = (req, res) => {
    const param = `${req.body.query}`;
  let selectByDate = `SELECT * FROM users WHERE (lastName LIKE '%${param}%' OR name LIKE '%${param}%') `;
  if (req.body.isBefore) {
    selectByDate += ` AND (birthday < '${req.body.date1}') `;
  }
  if (req.body.isAfter) {
    selectByDate += ` AND (birthday > '${req.body.date1}')`;
    console.log(selectByDate)
  }
  if (req.body.isBetween) {
    selectByDate += ` AND (birthday > '${req.body.date1}'AND birthday < '${req.body.date2}')`;
  }
  console.log(selectByDate);
  db.all(selectByDate, (err, result) => {
    if (!err) {
      console.log("error:" + err);
      res.status(505).send({message: 'error: '+ err})
    } else {
      console.log("devuelto");
      res.send(result);
    }
  });
};

module.exports = userController;
