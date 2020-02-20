"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Store = _interopRequireDefault(require("./Store"));

class Memory extends _Store.default {
  constructor() {
    super();
    this.type = 'Memory';
  }

}

var _default = Memory;
exports.default = _default;