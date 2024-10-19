"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _organizationsController = _interopRequireDefault(require("../controllers/organizations.Controller.js"));
var router = (0, _express.Router)();
router.get('/', _organizationsController["default"].getAllOrganizations);
router.get('/:id', _organizationsController["default"].getOrganizationById);
router.post('/', _organizationsController["default"].createOrganization);
router.put('/:id', _organizationsController["default"].updateOrganization);
router["delete"]('/:id', _organizationsController["default"].deleteOrganization);
var _default = exports["default"] = router;