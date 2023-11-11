const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/api/login", userController.login);
router.get("/api/register", userController.register);

module.exports = router;