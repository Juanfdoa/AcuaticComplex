const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const Pool = sequelize.define('Pool', {
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

module.exports = Pool;