"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.development = void 0;
require("dotenv/config");
var development = exports.development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
};