const express = require('express');
const router = express.Router();
const userController = require ("../controllers/user.controllers")


router.post("", userController.createUser);
router.get("", userController.getUsers);

router.get("/new", userController.returnNewUser);

router.get("/:id", userController.getUserById);

router.put("", userController.updateUser);
router.delete("", userController.deleteUser);






module.exports = router;