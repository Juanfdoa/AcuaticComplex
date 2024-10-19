import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';
import Lanes from './lanes.Model.js';

const Pools = sequelize.define('Pools', {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'piscina'
  }
}, {
  tableName: 'piscinas',
  timestamps: false,
});

Pools.hasMany(Lanes, {
  foreignKey: 'poolId',
  onDelete: 'CASCADE',
});

export default Pools;