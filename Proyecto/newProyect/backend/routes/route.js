import express from "express"
import * as newCtlr from "../controllers/controller.js"

const router = express.Router();
 router.post("/new/create", newCtlr.createNew);
 router.get("/new/get", newCtlr.getNew);
 router.get("/new/get/:idpet", newCtlr.getOneNew);
 router.delete("/new/delete/:idpet", newCtlr.deleteNew);
 router.put("/new/update/:idpet", newCtlr.updateNew);



export {router}