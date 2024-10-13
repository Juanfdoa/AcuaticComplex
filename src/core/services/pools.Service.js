import poolsRepository from '../../infrastructure/repositories/pools.Repository.js';

class PoolsService {
  async getAllPools(name) {
    var pools = await poolsRepository.findAll();
    if (name) {
      const nameLowerCase = name.toLowerCase();
      return pools.filter(pool => pool.name.toLowerCase().includes(nameLowerCase));
    }
    return pools;
  }

  async getPoolById(id) {
    return await poolsRepository.findById(id);
  }

  async createPool(poolData) {
    var name = poolData.name.toLowerCase();
    var pool = await poolsRepository.findBy({ name });
    if (pool) 
    {
      throw new Error('Ya existe una piscina con ese nombre');
    }
    return await poolsRepository.create(poolData);
  }

  async updatePool(id, poolData) {
    return await poolsRepository.update(id, poolData);
  }

  async deletePool(id) {
    return await poolsRepository.delete(id);
  }
}

export default new PoolsService();
