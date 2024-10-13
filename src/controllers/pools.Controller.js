import poolsService from '../core/services/pools.Service.js';

class PoolsController {
  async getAllPools(req, res) {
    try {
      const{ name } = req.query;
      const pools = await poolsService.getAllPools(name);
      res.status(200).json(pools);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las piscinas' });
    }
  }

  async getPoolById(req, res) {
    const { id } = req.params;
    try {
      const pool = await poolsService.getPoolById(id);
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
      const newPool = await poolsService.createPool(req.body);
      res.status(201).json(newPool);
    } catch (error) {
      if (error.message === 'Ya existe una piscina con ese nombre') {
        res.status(400).json({ message: error.message });
      } else {
        console.log(error);
        res.status(500).json({ message: 'Error al crear la piscina' }); 
      }
    }
  }

  async updatePool(req, res) {
    const { id } = req.params;
    try {
      const updatedPool = await poolsService.updatePool(id, req.body);
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
      const deletedPool = await poolsService.deletePool(id);
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

export default new PoolsController();