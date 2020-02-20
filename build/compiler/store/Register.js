"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Store = _interopRequireDefault(require("./Store"));

class Register extends _Store.default {
  constructor() {
    super();
    this.type = 'Register';
  }

}

var _default = Register;
exports.default = _default;