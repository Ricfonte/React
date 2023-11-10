import express  from "express";
import * as authorController from "../controllers/authorController.js"

const router = express.Router()
router.post ("/api/author/create", authorController.createAuthor);
router.get ("/api/author/get", authorController.getAuthors);
router.get ("/api/author/getOne/:idAuthor", authorController.getOneAuthors);
router.delete ("/api/author/delete/:idAuthor", authorController.deleteAuthors);
router.put("/api/author/update/:idAuthor", authorController.putAuthors);

export {router}