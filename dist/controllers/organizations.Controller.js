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
var _organizationsService = _interopRequireDefault(require("../core/services/organizations.service.js"));
var OrganizationsController = /*#__PURE__*/function () {
  function OrganizationsController() {
    (0, _classCallCheck2["default"])(this, OrganizationsController);
  }
  return (0, _createClass2["default"])(OrganizationsController, [{
    key: "getAllOrganizations",
    value: function () {
      var _getAllOrganizations = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var organizations;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _organizationsService["default"].getAllOrganizations();
            case 3:
              organizations = _context.sent;
              res.status(200).json(organizations);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              res.status(500).json({
                message: 'Error al obtener las organizaciones'
              });
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function getAllOrganizations(_x, _x2) {
        return _getAllOrganizations.apply(this, arguments);
      }
      return getAllOrganizations;
    }()
  }, {
    key: "getOrganizationById",
    value: function () {
      var _getOrganizationById = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var id, organization;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return _organizationsService["default"].getOrganizationById(id);
            case 4:
              organization = _context2.sent;
              if (organization) {
                res.status(200).json(organization);
              } else {
                res.status(404).json({
                  message: 'Organización no encontrada'
                });
              }
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              res.status(500).json({
                message: 'Error al obtener la organización'
              });
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 8]]);
      }));
      function getOrganizationById(_x3, _x4) {
        return _getOrganizationById.apply(this, arguments);
      }
      return getOrganizationById;
    }()
  }, {
    key: "createOrganization",
    value: function () {
      var _createOrganization = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var newOrganization;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _organizationsService["default"].createOrganization(req.body);
            case 3:
              newOrganization = _context3.sent;
              res.status(201).json(newOrganization);
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              if (_context3.t0.message === 'Ya existe una organización con ese nombre') {
                res.status(400).json({
                  message: _context3.t0.message
                });
              } else {
                console.log(_context3.t0);
                res.status(500).json({
                  message: 'Error al crear la organización'
                });
              }
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }));
      function createOrganization(_x5, _x6) {
        return _createOrganization.apply(this, arguments);
      }
      return createOrganization;
    }()
  }, {
    key: "updateOrganization",
    value: function () {
      var _updateOrganization = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, updatedOrganization;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              _context4.prev = 1;
              _context4.next = 4;
              return _organizationsService["default"].updateOrganization(id, req.body);
            case 4:
              updatedOrganization = _context4.sent;
              if (updatedOrganization) {
                res.status(200).json(updatedOrganization);
              } else {
                res.status(404).json({
                  message: 'Organización no encontrada'
                });
              }
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              res.status(500).json({
                message: 'Error al actualizar la organización'
              });
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 8]]);
      }));
      function updateOrganization(_x7, _x8) {
        return _updateOrganization.apply(this, arguments);
      }
      return updateOrganization;
    }()
  }, {
    key: "deleteOrganization",
    value: function () {
      var _deleteOrganization = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, deletedOrganization;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              id = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return _organizationsService["default"].deleteOrganization(id);
            case 4:
              deletedOrganization = _context5.sent;
              if (deletedOrganization) {
                res.status(200).json({
                  message: 'Organización eliminada'
                });
              } else {
                res.status(404).json({
                  message: 'Organización no encontrada'
                });
              }
              _context5.next = 11;
              break;
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);
              res.status(500).json({
                message: 'Error al eliminar la organización'
              });
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 8]]);
      }));
      function deleteOrganization(_x9, _x10) {
        return _deleteOrganization.apply(this, arguments);
      }
      return deleteOrganization;
    }()
  }]);
}();
var _default = exports["default"] = new OrganizationsController();