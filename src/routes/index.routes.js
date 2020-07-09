const { Router } = require("express");
const router = Router();
const {
  createTable,
  insertData,
  updateData,
  deleteData,
  selectDatabyNameOrLastName,
  selectByBetweenDate,
  selectByDate,
} = require("../controllers/index.controller");

router.post("/api/create-user", insertData);

router.put("/api/update-user/:id", updateData);

router.delete('/api/delete-user/:id', deleteData);

router.get('/api/get-user-by-date', selectByDate)

module.exports = router;
