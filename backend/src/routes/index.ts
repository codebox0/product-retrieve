import { Router } from 'express';
import productsRoutes from "./products.routes";
import pricesRoutes from "./prices.routes";

const router = Router();

router.use('/products', productsRoutes);
router.use('/prices', pricesRoutes);

export default router;
