import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Pools = sequelize.define('Pools', {
  id: {
    type: DataTypes.INTEGER,
    //allowNull: true,
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

export default Pools;