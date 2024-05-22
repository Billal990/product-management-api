import { Router } from 'express';
import { orderControlers } from './order.controller';

const router = Router();

router.post('/', orderControlers.createNewOrder);
router.get('/', orderControlers.getAllOrders);

export const orderRoutes = router;
