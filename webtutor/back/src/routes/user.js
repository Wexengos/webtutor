const express = require("express");
const router = express.Router();
const UserController = require('../controlers/user')
const AuthController = require('../controlers/authControler')

router.post("/user",UserController.create);
router.post("/login",AuthController.login);


module.exports = router;