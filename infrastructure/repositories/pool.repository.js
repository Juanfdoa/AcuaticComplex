const sequelize = require('../../config/sequelize');
const { Op } = require('sequelize');
const Pool = require('../models/pool.model');

class PoolRepository {
  async findAll() {
    return await Pool.findAll();
  }

  async findById(id) {
    return await Pool.findByPk(id);
  }

  async findBy(param) {
    return await Pool.findOne({
        where: {
            name: {
                [Op.iLike]: param.name
            }
        }
    });
  } 

  async create(poolData) {
    return await Pool.create(poolData);
  }

  async update(id, poolData) {
    const pool = await Pool.findByPk(id);
    if (pool) {
      return await pool.update(poolData);
    }
    return null;
  }

  async delete(id) {
    const pool = await Pool.findByPk(id);
    if (pool) {
      return await pool.destroy();
    }
    return null;
  }
}

module.exports = new PoolRepository();