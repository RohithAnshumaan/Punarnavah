import e, { Router } from 'express';
import { createOrder, getOrders, getOrderById, updateOrder } from '../controllers/ordersControllers';

const ordersRouter = Router();

ordersRouter.post('/:id', createOrder as any);
ordersRouter.get('/', getOrders as any);
ordersRouter.get('/:id', getOrderById as any);
ordersRouter.put('/:id', updateOrder as any);

export default ordersRouter;
