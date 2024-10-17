import {Router} from 'express';
import {contribute, getContributionsById} from '../controllers/contributionsControllers';

const contributionsRouter = Router();

contributionsRouter.post('/:wasteRequestId', contribute as any);
contributionsRouter.get('/:wasteRequestId', getContributionsById as any);

export default contributionsRouter;