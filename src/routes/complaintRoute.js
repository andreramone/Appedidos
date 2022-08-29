import { Router } from 'express';
import ComplaintController from '../Controllers/complaintController.js';

const router = new Router();

router.post('/denuncias', ComplaintController.init);

export default router;
