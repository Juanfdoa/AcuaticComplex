import { Router } from 'express';
const router = Router();

import poolsController from '../controllers/pools.Controller.js';

router.get('/', poolsController.getAllPools);
router.get('/:id', poolsController.getPoolById);
router.post('/', poolsController.createPool);
router.put('/:id', poolsController.updatePool);
router.delete('/:id', poolsController.deletePool);

export default router;