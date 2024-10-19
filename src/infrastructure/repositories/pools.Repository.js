//import sequelize from '../../config/sequelize.js';
import { Op } from 'sequelize';
import PoolsModel from '../models/pools.Model.js';

class PoolsRepository {
  async findAll(options = {}) {
    return await PoolsModel.findAll(options);
  }

  async findById(id) {
    return await PoolsModel.findByPk(id);
  }

  async findBy(param) {
    return await PoolsModel.findOne({
        where: {
            name: {
                [Op.iLike]: param.name
            }
        }
    });
  } 

  async create(poolData) {
    return await PoolsModel.create(poolData);
  }

  async update(id, poolData) {
    const pool = await PoolsModel.findByPk(id);
    if (pool) {
      return await pool.update(poolData);
    }
    return null;
  }

  async delete(id) {
    const pool = await PoolsModel.findByPk(id);
    if (pool) {
      return await pool.destroy();
    }
    return null;
  }
}

export default new PoolsRepository();