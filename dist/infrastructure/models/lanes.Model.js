"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _sequelize2 = _interopRequireDefault(require("../../config/sequelize.js"));
var Lanes = _sequelize2["default"].define('Lanes', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  },
  laneNumber: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    field: 'carril'
  },
  poolId: {
    // Clave foránea que referencia a la tabla Pools
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    field: 'id_piscina',
    references: {
      model: 'pools',
      // Nombre de la tabla de Pools 
      key: 'id'
    }
  }
}, {
  tableName: 'carriles',
  timestamps: false
});
var _default = exports["default"] = Lanes;