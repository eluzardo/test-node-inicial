const { Router } = require("express");
const router = Router();
const {
  insertData,
  updateData,
  deleteData,
  search,
} = require("../controllers/index.controller");

//Create user URL
router.post("/api/create-user", insertData);

//Update user URL
router.put("/api/update-user/:id", updateData);

//Delete user URL
router.delete('/api/delete-user/:id', deleteData);

//Search user URL
router.get('/api/search', search)

module.exports = router;
