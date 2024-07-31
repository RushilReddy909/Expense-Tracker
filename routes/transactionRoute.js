const express = require("express");
const {
  retrieveAll,
  addTransaction,
} = require("../controllers/transactionControl");

const router = express.Router();

router.post("/add-transaction", addTransaction);

router.post("/get-transaction", retrieveAll);

module.exports = router;
