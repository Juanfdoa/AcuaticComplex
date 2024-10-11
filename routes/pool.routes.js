const express = require('express');
const router = express.Router();
const poolController = require('../controllers/pool.controller');

router.get('/', poolController.getAllPools);
router.get('/:id', poolController.getPoolById);
router.post('/', poolController.createPool);
router.put('/:id', poolController.updatePool);
router.delete('/:id', poolController.deletePool);

module.exports = router;
