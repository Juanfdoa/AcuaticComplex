"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _config = require("./config.js");
var sequelize = new _sequelize.Sequelize(_config.development.database, _config.development.username, _config.development.password, {
  host: _config.development.host,
  port: _config.development.port,
  dialect: _config.development.dialect
});
var _default = exports["default"] = sequelize;