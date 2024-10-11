const poolRepository = require('../../infrastructure/repositories/pool.repository');

class PoolService {
  async getAllPools(name) {
    var pools = await poolRepository.findAll();
    if (name) {
      const nameLowerCase = name.toLowerCase();
      return pools.filter(pool => pool.name.toLowerCase().includes(nameLowerCase));
    }
    return pools;
  }

  async getPoolById(id) {
    return await poolRepository.findById(id);
  }

  async createPool(poolData) {
    var name = poolData.name.toLowerCase();
    var pool = await poolRepository.findBy({ name });
    if (pool) 
    {
      throw new Error('Ya existe una piscina con ese nombre');
    }
    return await poolRepository.create(poolData);
  }

  async updatePool(id, poolData) {
    return await poolRepository.update(id, poolData);
  }

  async deletePool(id) {
    return await poolRepository.delete(id);
  }
}

module.exports = new PoolService();
