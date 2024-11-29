import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:productId', productController.getAProduct);
router.put('/products/:productId', productController.updateAProduct);
router.delete('/products/:productId', productController.deleteAProduct);

export const productRoute = router;
