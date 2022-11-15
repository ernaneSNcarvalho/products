import {Router} from 'express';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);

router.post('/product', apiController.createProduct);

export default router;