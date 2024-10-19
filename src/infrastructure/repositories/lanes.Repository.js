import lanesModel from '../models/lanes.Model.js';

class LanesRepository {
  async findAll() {
    return await lanesModel.findAll();
  }

  async findById(id) {
    return await lanesModel.findByPk(id);
  }

  async create(laneData) {
    return await lanesModel.create(laneData);
  }

  async update(id, laneData) {
    const lane = await lanesModel.findByPk(id);
    if (lane) {
      return await lane.update(laneData);
    }
    return null;
  }

  async delete(id) {
    const lane = await lanesModel.findByPk(id);
    if (lane) {
      return await lane.destroy();
    }
    return null;
  }
}

export default new LanesRepository();