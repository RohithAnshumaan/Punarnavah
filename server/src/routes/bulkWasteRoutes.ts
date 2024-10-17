import { Router } from 'express';
import { uploadBulkWaste, getBulkWaste, getBulkWasteById } from '../controllers/bulkWasteControllers';

const bulkWasteRouter = Router();

bulkWasteRouter.post('/', uploadBulkWaste as any);
bulkWasteRouter.get('/', getBulkWaste as any);
bulkWasteRouter.get('/:id', getBulkWasteById as any);

export default bulkWasteRouter;