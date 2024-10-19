"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _poolsRepository = _interopRequireDefault(require("../../infrastructure/repositories/pools.Repository.js"));
var _lanesModel = _interopRequireDefault(require("../../infrastructure/models/lanes.Model.js"));
var _poolsDto = _interopRequireDefault(require("../dtos/pools.Dto.js"));
var PoolsService = /*#__PURE__*/function () {
  function PoolsService() {
    (0, _classCallCheck2["default"])(this, PoolsService);
  }
  return (0, _createClass2["default"])(PoolsService, [{
    key: "getAllPools",
    value: function () {
      var _getAllPools = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(name) {
        var pools, poolDTOs, nameLowerCase;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _poolsRepository["default"].findAll({
                include: {
                  model: _lanesModel["default"]
                }
              });
            case 2:
              pools = _context.sent;
              poolDTOs = pools.map(function (pool) {
                return new _poolsDto["default"](pool);
              });
              if (!name) {
                _context.next = 7;
                break;
              }
              nameLowerCase = name.toLowerCase();
              return _context.abrupt("return", poolDTOs.filter(function (pool) {
                return pool.name.toLowerCase().includes(nameLowerCase);
              }));
            case 7:
              return _context.abrupt("return", poolDTOs);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getAllPools(_x) {
        return _getAllPools.apply(this, arguments);
      }
      return getAllPools;
    }()
  }, {
    key: "getPoolById",
    value: function () {
      var _getPoolById = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _poolsRepository["default"].findById(id);
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getPoolById(_x2) {
        return _getPoolById.apply(this, arguments);
      }
      return getPoolById;
    }()
  }, {
    key: "createPool",
    value: function () {
      var _createPool = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(poolData) {
        var name, pool;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              name = poolData.name.toLowerCase();
              _context3.next = 3;
              return _poolsRepository["default"].findBy({
                name: name
              });
            case 3:
              pool = _context3.sent;
              if (!pool) {
                _context3.next = 6;
                break;
              }
              throw new Error('Ya existe una piscina con ese nombre');
            case 6:
              _context3.next = 8;
              return _poolsRepository["default"].create(poolData);
            case 8:
              return _context3.abrupt("return", _context3.sent);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function createPool(_x3) {
        return _createPool.apply(this, arguments);
      }
      return createPool;
    }()
  }, {
    key: "updatePool",
    value: function () {
      var _updatePool = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(id, poolData) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _poolsRepository["default"].update(id, poolData);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function updatePool(_x4, _x5) {
        return _updatePool.apply(this, arguments);
      }
      return updatePool;
    }()
  }, {
    key: "deletePool",
    value: function () {
      var _deletePool = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _poolsRepository["default"]["delete"](id);
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function deletePool(_x6) {
        return _deletePool.apply(this, arguments);
      }
      return deletePool;
    }()
  }]);
}();
var _default = exports["default"] = new PoolsService();