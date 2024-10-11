const poolService = require('../core/services/pool.service');

class PoolController {
  async getAllPools(req, res) {
    try {
      const{ name } = req.query;
      const pools = await poolService.getAllPools(name);
      res.status(200).json(pools);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las piscinas' });
    }
  }

  async getPoolById(req, res) {
    const { id } = req.params;
    try {
      const pool = await poolService.getPoolById(id);
      if (pool) {
        res.status(200).json(pool);
      } else {
        res.status(404).json({ message: 'Piscina no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la piscina' });
    }
  }

  async createPool(req, res) {
    try {
      const newPool = await poolService.createPool(req.body);
      res.status(201).json(newPool);
    } catch (error) {
      if (error.message === 'Ya existe una piscina con ese nombre') {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Error al crear la piscina' }); 
      }
    }
  }

  async updatePool(req, res) {
    const { id } = req.params;
    try {
      const updatedPool = await poolService.updatePool(id, req.body);
      if (updatedPool) {
        res.status(200).json(updatedPool);
      } else {
        res.status(404).json({ message: 'Piscina no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la piscina' });
    }
  }

  async deletePool(req, res) {
    const { id } = req.params;
    try {
      const deletedPool = await poolService.deletePool(id);
      if (deletedPool) {
        res.status(200).json({ message: 'Piscina eliminada' });
      } else {
        res.status(404).json({ message: 'Piscina no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la piscina' });
    }
  }
}

module.exports = new PoolController();
