import express from "express";
import * as userCtrl from "../controllers/userController.js";

const router = express.Router();
router.post("/", userCtrl.registerUser);
router.post("/", userCtrl.loginUser);

export {router};