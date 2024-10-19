"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var PoolDTO = /*#__PURE__*/(0, _createClass2["default"])(function PoolDTO(pool) {
  (0, _classCallCheck2["default"])(this, PoolDTO);
  this.id = pool.id;
  this.name = pool.name;
  this.lanes = pool.Lanes.map(function (lane) {
    return {
      id: lane.id,
      laneNumber: lane.laneNumber
    };
  });
});
var _default = exports["default"] = PoolDTO;