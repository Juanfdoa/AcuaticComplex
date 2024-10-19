"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _sequelize2 = _interopRequireDefault(require("../../config/sequelize.js"));
var _lanesModel = _interopRequireDefault(require("./lanes.Model.js"));
var Pools = _sequelize2["default"].define('Pools', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    field: 'piscina'
  }
}, {
  tableName: 'piscinas',
  timestamps: false
});
Pools.hasMany(_lanesModel["default"], {
  foreignKey: 'poolId',
  onDelete: 'CASCADE'
});
var _default = exports["default"] = Pools;