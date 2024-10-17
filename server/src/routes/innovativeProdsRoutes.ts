import { Router } from "express";
import { uploadInnovativeProd, getInnovativeProd, getInnovativeProdById } from "../controllers/innovativeProdsControllers";
import { authMiddleware } from "../middlewares/authMiddleware";

const innovativeProdsRouter = Router();

innovativeProdsRouter.post('/', authMiddleware as any, uploadInnovativeProd as any);
innovativeProdsRouter.get('/', authMiddleware as any, getInnovativeProd as any);
innovativeProdsRouter.get('/:id', authMiddleware as any, getInnovativeProdById as any);

export default innovativeProdsRouter;