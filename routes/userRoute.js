const express = require("express");
const { loginControl, registerControl } = require("../controllers/userControl");

const router = express.Router();

//User Login
router.post("/login", loginControl);

//User Register
router.post("/register", registerControl);

module.exports = router;
