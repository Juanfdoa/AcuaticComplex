import poolsRepository from '../../infrastructure/repositories/pools.Repository.js';
import Lanes from '../../infrastructure/models/lanes.Model.js';
import PoolDTO from '../dtos/pools.Dto.js';

class PoolsService {
  async getAllPools(name) {
    const pools = await poolsRepository.findAll({
      include: {
        model: Lanes  
      }
    });

    const poolDTOs = pools.map(pool => new PoolDTO(pool));

    if (name) {
      const nameLowerCase = name.toLowerCase();
      return poolDTOs.filter(pool => pool.name.toLowerCase().includes(nameLowerCase));
    }
    return poolDTOs;
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
