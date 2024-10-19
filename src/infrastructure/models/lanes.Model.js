import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Lanes = sequelize.define('Lanes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  laneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'carril',
  },
  poolId: {  // Clave foránea que referencia a la tabla Pools
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_piscina',
    references: {
      model: 'pools', // Nombre de la tabla de Pools 
      key: 'id'
    }
  }
}, {
  tableName: 'carriles',
  timestamps: false,
});

export default Lanes;
