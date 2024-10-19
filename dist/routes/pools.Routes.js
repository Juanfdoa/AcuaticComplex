"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _poolsController = _interopRequireDefault(require("../controllers/pools.Controller.js"));
var router = (0, _express.Router)();
router.get('/', _poolsController["default"].getAllPools);
router.get('/:id', _poolsController["default"].getPoolById);
router.post('/', _poolsController["default"].createPool);
router.put('/:id', _poolsController["default"].updatePool);
router["delete"]('/:id', _poolsController["default"].deletePool);
var _default = exports["default"] = router;