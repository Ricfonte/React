
import express from "express";

import * as productController from "../controllers/productController.js";
const router = express.Router();

router.get("/api/products/get", productController.getProducts);
router.post("/api/products/create", productController.createProduct);
router.put("/api/products/update/:idProduct", productController.updateProduct);
router.delete("/api/products/delete/:idProduct", productController.deleteProduct);
router.get("/api/products/getOne/:idProduct", productController.getOneProduct);

export {router};