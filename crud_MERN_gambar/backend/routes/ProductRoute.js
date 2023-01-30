import express from "express";
import {
    getProducts,
    getProductById,
    saveProducts,
    updateProducts,
    deleteProducts
} from "../controllers/productController.js";

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', saveProducts);
router.patch('/product/:id', updateProducts);
router.delete('/products/:id', deleteProducts);

export default router;