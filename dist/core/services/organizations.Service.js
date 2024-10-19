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
var _organizations = _interopRequireDefault(require("../../infrastructure/repositories/organizations.Repository"));
var OrganizationsService = /*#__PURE__*/function () {
  function OrganizationsService() {
    (0, _classCallCheck2["default"])(this, OrganizationsService);
  }
  return (0, _createClass2["default"])(OrganizationsService, [{
    key: "getAllOrganizations",
    value: function () {
      var _getAllOrganizations = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _organizations["default"].findAll();
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getAllOrganizations() {
        return _getAllOrganizations.apply(this, arguments);
      }
      return getAllOrganizations;
    }()
  }, {
    key: "getOrganizationById",
    value: function () {
      var _getOrganizationById = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _organizations["default"].findById(id);
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function getOrganizationById(_x) {
        return _getOrganizationById.apply(this, arguments);
      }
      return getOrganizationById;
    }()
  }, {
    key: "createOrganization",
    value: function () {
      var _createOrganization = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(orgData) {
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
      function createOrganization(_x2) {
        return _createOrganization.apply(this, arguments);
      }
      return createOrganization;
    }()
  }, {
    key: "updateOrganization",
    value: function () {
      var _updateOrganization = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(id, orgData) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _organizations["default"].update(id, orgData);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function updateOrganization(_x3, _x4) {
        return _updateOrganization.apply(this, arguments);
      }
      return updateOrganization;
    }()
  }, {
    key: "deleteOrganization",
    value: function () {
      var _deleteOrganization = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _organizations["default"]["delete"](id);
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function deleteOrganization(_x5) {
        return _deleteOrganization.apply(this, arguments);
      }
      return deleteOrganization;
    }()
  }]);
}();
var _default = exports["default"] = new OrganizationsService();