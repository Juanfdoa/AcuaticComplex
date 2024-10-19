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
var _poolsService = _interopRequireDefault(require("../core/services/pools.Service.js"));
var PoolsController = /*#__PURE__*/function () {
  function PoolsController() {
    (0, _classCallCheck2["default"])(this, PoolsController);
  }
  return (0, _createClass2["default"])(PoolsController, [{
    key: "getAllPools",
    value: function () {
      var _getAllPools = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var name, pools;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              name = req.query.name;
              _context.next = 4;
              return _poolsService["default"].getAllPools(name);
            case 4:
              pools = _context.sent;
              res.status(200).json(pools);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              res.status(500).json({
                message: 'Error al obtener las piscinas'
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }));
      function getAllPools(_x, _x2) {
        return _getAllPools.apply(this, arguments);
      }
      return getAllPools;
    }()
  }, {
    key: "getPoolById",
    value: function () {
      var _getPoolById = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var id, pool;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return _poolsService["default"].getPoolById(id);
            case 4:
              pool = _context2.sent;
              if (pool) {
                res.status(200).json(pool);
              } else {
                res.status(404).json({
                  message: 'Piscina no encontrada'
                });
              }
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              res.status(500).json({
                message: 'Error al obtener la piscina'
              });
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 8]]);
      }));
      function getPoolById(_x3, _x4) {
        return _getPoolById.apply(this, arguments);
      }
      return getPoolById;
    }()
  }, {
    key: "createPool",
    value: function () {
      var _createPool = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var newPool;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _poolsService["default"].createPool(req.body);
            case 3:
              newPool = _context3.sent;
              res.status(201).json(newPool);
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              if (_context3.t0.message === 'Ya existe una piscina con ese nombre') {
                res.status(400).json({
                  message: _context3.t0.message
                });
              } else {
                console.log(_context3.t0);
                res.status(500).json({
                  message: 'Error al crear la piscina'
                });
              }
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }));
      function createPool(_x5, _x6) {
        return _createPool.apply(this, arguments);
      }
      return createPool;
    }()
  }, {
    key: "updatePool",
    value: function () {
      var _updatePool = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, updatedPool;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              _context4.prev = 1;
              _context4.next = 4;
              return _poolsService["default"].updatePool(id, req.body);
            case 4:
              updatedPool = _context4.sent;
              if (updatedPool) {
                res.status(200).json(updatedPool);
              } else {
                res.status(404).json({
                  message: 'Piscina no encontrada'
                });
              }
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              res.status(500).json({
                message: 'Error al actualizar la piscina'
              });
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 8]]);
      }));
      function updatePool(_x7, _x8) {
        return _updatePool.apply(this, arguments);
      }
      return updatePool;
    }()
  }, {
    key: "deletePool",
    value: function () {
      var _deletePool = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, deletedPool;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return _poolsService["default"].deletePool(id);
            case 4:
              deletedPool = _context5.sent;
              if (deletedPool) {
                res.status(200).json({
                  message: 'Piscina eliminada'
                });
              } else {
                res.status(404).json({
                  message: 'Piscina no encontrada'
                });
              }
              _context5.next = 11;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);
              res.status(500).json({
                message: 'Error al eliminar la piscina'
              });
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 8]]);
      }));
      function deletePool(_x9, _x10) {
        return _deletePool.apply(this, arguments);
      }
      return deletePool;
    }()
  }]);
}();
var _default = exports["default"] = new PoolsController();