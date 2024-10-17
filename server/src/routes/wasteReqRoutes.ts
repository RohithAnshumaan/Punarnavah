import { Router } from "express";
import { uploadWasteReq, getWasteReq, getWasteReqById, getUnsatisfiedWasteReq } from "../controllers/wasteReqControllers";
import { authMiddleware } from "../middlewares/authMiddleware";

const wasteReqRouter = Router();

wasteReqRouter.post('/', authMiddleware as any, uploadWasteReq as any);
wasteReqRouter.get('/', authMiddleware as any, getWasteReq as any);
wasteReqRouter.get('/unsatisfied', authMiddleware as any, getUnsatisfiedWasteReq as any);
wasteReqRouter.get('/:id', authMiddleware as any, getWasteReqById as any);

export default wasteReqRouter;