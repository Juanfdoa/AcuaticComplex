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
var _organizations = _interopRequireDefault(require("../models/organizations.Model"));
var OrganizationsRepository = /*#__PURE__*/function () {
  function OrganizationsRepository() {
    (0, _classCallCheck2["default"])(this, OrganizationsRepository);
  }
  return (0, _createClass2["default"])(OrganizationsRepository, [{
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var options,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              _context.next = 3;
              return _organizations["default"].findAll(options);
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function findAll() {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _organizations["default"].findByPk(id);
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function findById(_x) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(orgData) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _organizations["default"].create(orgData);
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function create(_x2) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(id, orgData) {
        var org;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _organizations["default"].findByPk(id);
            case 2:
              org = _context4.sent;
              if (!org) {
                _context4.next = 7;
                break;
              }
              _context4.next = 6;
              return org.update(orgData);
            case 6:
              return _context4.abrupt("return", _context4.sent);
            case 7:
              return _context4.abrupt("return", null);
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var org;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _organizations["default"].findByPk(id);
            case 2:
              org = _context5.sent;
              if (!org) {
                _context5.next = 7;
                break;
              }
              _context5.next = 6;
              return org.destroy();
            case 6:
              return _context5.abrupt("return", _context5.sent);
            case 7:
              return _context5.abrupt("return", null);
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
}();
var _default = exports["default"] = new OrganizationsRepository();