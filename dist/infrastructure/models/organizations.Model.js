"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _sequelize2 = _interopRequireDefault(require("../../config/sequelize.js"));
var Organizations = _sequelize2["default"].define("Organizations", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    field: "id",
    primaryKey: true,
    autoIncrement: true
  },
  organization: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    field: "organismo"
  },
  initial: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    field: "sigla"
  },
  program: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    field: "programa"
  },
  modality: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    field: "modalidad"
  },
  trainer: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    field: "formador"
  }
}, {
  tableName: "organismos",
  timestamps: false
});
var _default = exports["default"] = Organizations;