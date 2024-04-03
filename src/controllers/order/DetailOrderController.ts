import { Request, Response } from 'express';
import { DetailOrderService } from '../../services/order/DetailOrderService';

class DetailOrderController {
    async handle(req: Request, res:Response) {
        const order_id = req.query.order_id as string;

        const detailOrder = await new DetailOrderService().execute({ order_id });

        res.json(detailOrder)
    }
}

export { DetailOrderController };